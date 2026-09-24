import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Flame, Loader2, ArrowUpRight, Code2 } from 'lucide-react';
import { ActivityCalendar } from 'react-activity-calendar';
import './DSA.css';

const DSA = ({ theme }) => {
  const [lcStats, setLcStats] = useState({
    solvedProblem: '...',
    easySolved: '...',
    mediumSolved: '...',
    hardSolved: '...'
  });
  const [lcCalendar, setLcCalendar] = useState({
    streak: '...'
  });
  const [recentSubs, setRecentSubs] = useState([]);
  const [skillStats, setSkillStats] = useState([]);
  const [calendarData, setCalendarData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeetCodeData = async () => {
      try {
        const statsRes = await fetch('https://alfa-leetcode-api.onrender.com/sivalankadinesh2005/solved');
        if (!statsRes.ok) throw new Error('Rate limit exceeded or API error');
        const statsData = await statsRes.json();
        setLcStats(statsData);

        const calRes = await fetch('https://alfa-leetcode-api.onrender.com/sivalankadinesh2005/calendar');
        if (!calRes.ok) throw new Error('Rate limit exceeded or API error');
        const calData = await calRes.json();
        setLcCalendar(calData);

        if (calData && calData.submissionCalendar) {
          const calendarJson = JSON.parse(calData.submissionCalendar);
          const yearData = [];
          const today = new Date();
          
          for (let i = 365; i >= 0; i--) {
            const d = new Date(today);
            d.setDate(d.getDate() - i);
            const dateStr = d.toISOString().split('T')[0];
            yearData.push({
              date: dateStr,
              count: 0,
              level: 0
            });
          }

          Object.keys(calendarJson).forEach(timestamp => {
            const count = calendarJson[timestamp];
            const d = new Date(parseInt(timestamp) * 1000);
            const dateStr = d.toISOString().split('T')[0];
            
            const existingDay = yearData.find(item => item.date === dateStr);
            if (existingDay) {
              existingDay.count = count;
              let level = 0;
              if (count > 0 && count <= 2) level = 1;
              else if (count >= 3 && count <= 5) level = 2;
              else if (count >= 6 && count <= 9) level = 3;
              else if (count >= 10) level = 4;
              existingDay.level = level;
            }
          });
          
          setCalendarData(yearData);
        }

        const skillRes = await fetch('https://alfa-leetcode-api.onrender.com/skillStats/sivalankadinesh2005');
        if (!skillRes.ok) throw new Error('Rate limit exceeded or API error');
        const skillData = await skillRes.json();
        if (skillData && skillData.matchedUser && skillData.matchedUser.tagProblemCounts) {
          const tags = skillData.matchedUser.tagProblemCounts;
          const allTags = [...tags.advanced, ...tags.intermediate, ...tags.fundamental];
          const sortedTags = allTags.sort((a, b) => b.problemsSolved - a.problemsSolved).slice(0, 6);
          setSkillStats(sortedTags);
        }

        const subRes = await fetch('https://alfa-leetcode-api.onrender.com/sivalankadinesh2005/acSubmission');
        if (!subRes.ok) throw new Error('Rate limit exceeded or API error');
        const subData = await subRes.json();
        if (subData && subData.submission) {
          const uniqueSubs = [];
          const seen = new Set();
          for (let sub of subData.submission) {
            if (!seen.has(sub.title)) {
              seen.add(sub.title);
              uniqueSubs.push(sub);
            }
            if (uniqueSubs.length === 5) break;
          }
          setRecentSubs(uniqueSubs);
        }
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching LeetCode data:', error);
        setLoading(false);
      }
    };
    fetchLeetCodeData();
  }, []);

  const stats = [
    { label: 'Problems Solved', value: lcStats.solvedProblem, color: 'var(--color-brand-gold)' },
    { label: 'Easy', value: lcStats.easySolved, color: '#10b981' },
    { label: 'Medium', value: lcStats.mediumSolved, color: '#f59e0b' },
    { label: 'Hard', value: lcStats.hardSolved, color: '#ef4444' }
  ];

  const platforms = [
    {
      name: 'GeeksforGeeks',
      url: 'https://www.geeksforgeeks.org/profile/dineshsivalanka',
      handle: '@dineshsivalanka',
      desc: 'Practice & Problem Solving',
      icon: 'https://cdn.simpleicons.org/geeksforgeeks/298D46',
      badgeColor: '#298D46',
      hoverBorder: 'hover:border-[#298D46]/60',
    },
    {
      name: 'HackerRank',
      url: 'https://www.hackerrank.com/profile/DineshSivalanka',
      handle: '@DineshSivalanka',
      desc: 'Algorithm Challenges & Badges',
      icon: 'https://cdn.simpleicons.org/hackerrank/00EA64',
      badgeColor: '#00EA64',
      hoverBorder: 'hover:border-[#00EA64]/60',
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/sivalankadinesh2005/',
      handle: '@sivalankadinesh2005',
      desc: 'Contests & Solved Problems',
      icon: 'https://cdn.simpleicons.org/leetcode/FFA116',
      badgeColor: '#FFA116',
      hoverBorder: 'hover:border-[#FFA116]/60',
    },
  ];

  const getLangIcon = (lang) => {
    const langLower = lang.toLowerCase();
    if (langLower.includes('java')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg';
    if (langLower.includes('python')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg';
    if (langLower.includes('cpp') || langLower.includes('c++')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg';
    return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg';
  };

  return (
    <section id="dsa" className="relative w-full py-24 sm:py-32 px-6 sm:px-12 bg-brand-bg">
      <div className="max-w-[1200px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 sm:mb-24 gap-6"
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[12px] font-bold tracking-[0.2em] text-brand-gold uppercase">02 //</span>
              <div className="w-12 h-[1px] bg-brand-gold/50"></div>
            </div>
            <h2 className="font-space font-extrabold text-[40px] sm:text-[56px] text-white uppercase tracking-tight">
              LEETCODE METRICS
            </h2>
          </div>

          {/* Quick Platform Icon Links */}
          <div className="flex items-center gap-3">
            {platforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`${platform.name} (${platform.handle})`}
                className="group flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 border border-white/10 hover:border-brand-gold hover:bg-white/10 transition-all duration-300"
              >
                <img 
                  src={platform.icon} 
                  alt={platform.name} 
                  className="w-5 h-5 object-contain group-hover:scale-110 transition-transform duration-300" 
                />
              </a>
            ))}
          </div>
        </motion.div>

        <div className="flex flex-col gap-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="glass-card p-6 text-center group hover:border-brand-gold/50 transition-colors">
                <h4 style={{ color: stat.color }} className="text-3xl font-bold font-space mb-2">
                  {loading ? <Loader2 className="animate-spin inline" size={24} /> : stat.value}
                </h4>
                <p className="text-gray-400 text-sm font-medium tracking-wide uppercase">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-8"
          >
            <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
              <h3 className="font-space text-lg text-white font-bold flex items-center">
                <Flame className="mr-2 inline text-brand-gold" size={22}/> Activity
              </h3>
              <span className="text-gray-400 text-sm font-medium tracking-widest uppercase">
                {loading ? <Loader2 className="animate-spin inline" size={16} /> : `Max Streak: ${lcCalendar.streak} Days`}
              </span>
            </div>
            
            <div className="w-full overflow-x-auto pb-4">
              {loading || calendarData.length === 0 ? (
                <div className="flex justify-center py-8"><Loader2 className="animate-spin text-brand-gold" size={32} /></div>
              ) : (
                <ActivityCalendar 
                  data={calendarData} 
                  theme={{
                    light: ['#121212', '#4d4111', '#806915', '#b3941a', '#FDE047'],
                    dark: ['#121212', '#4d4111', '#806915', '#b3941a', '#FDE047'],
                  }}
                  colorScheme="dark"
                  blockSize={12}
                  blockRadius={2}
                  blockMargin={4}
                  fontSize={12}
                  showWeekdayLabels={true}
                />
              )}
            </div>
          </motion.div>

          {/* Coding Platform Profiles: GeeksforGeeks, HackerRank, LeetCode */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-6 sm:p-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 pb-4 border-b border-white/10 gap-2">
              <h3 className="font-space text-lg text-white font-bold flex items-center gap-2">
                <Code2 className="text-brand-gold" size={22} /> Coding Profiles & Platforms
              </h3>
              <span className="text-gray-400 text-xs font-semibold tracking-widest uppercase">
                Practice & Problem Solving
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {platforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative flex items-center justify-between p-5 rounded-xl border border-white/10 bg-black/40 hover:bg-black/60 ${platform.hoverBorder} transition-all duration-300`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-2.5 group-hover:scale-110 group-hover:border-white/20 transition-all duration-300">
                      <img 
                        src={platform.icon} 
                        alt={platform.name} 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="font-space font-bold text-white text-base group-hover:text-brand-gold transition-colors">
                        {platform.name}
                      </h4>
                      <p className="text-xs text-gray-400 font-mono mt-0.5">
                        {platform.handle}
                      </p>
                      <p className="text-[11px] text-gray-500 mt-1">
                        {platform.desc}
                      </p>
                    </div>
                  </div>
                  <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-brand-gold group-hover:border-brand-gold/40 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0">
                    <ArrowUpRight size={17} />
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default DSA;

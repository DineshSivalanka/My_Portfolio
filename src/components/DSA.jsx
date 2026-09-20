import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, Code2, Trophy, Flame, Loader2, GitCommit } from 'lucide-react';
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
          className="flex flex-col items-center sm:items-start mb-16 sm:mb-24"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[12px] font-bold tracking-[0.2em] text-brand-gold uppercase">06 //</span>
            <div className="w-12 h-[1px] bg-brand-gold/50"></div>
          </div>
          <h2 className="font-space font-extrabold text-[40px] sm:text-[56px] text-white uppercase tracking-tight">
            LEETCODE METRICS
          </h2>
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

        </div>
      </div>
    </section>
  );
};

export default DSA;

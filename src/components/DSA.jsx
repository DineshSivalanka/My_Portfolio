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
        // Fetch solved stats
        const statsRes = await fetch('https://alfa-leetcode-api.onrender.com/sivalankadinesh2005/solved');
        const statsData = await statsRes.json();
        setLcStats(statsData);

        // Fetch calendar/streak
        const calRes = await fetch('https://alfa-leetcode-api.onrender.com/sivalankadinesh2005/calendar');
        const calData = await calRes.json();
        setLcCalendar(calData);

        // Parse Calendar for Heatmap
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

        // Fetch Skill Stats
        const skillRes = await fetch('https://alfa-leetcode-api.onrender.com/skillStats/sivalankadinesh2005');
        const skillData = await skillRes.json();
        if (skillData && skillData.matchedUser && skillData.matchedUser.tagProblemCounts) {
          const tags = skillData.matchedUser.tagProblemCounts;
          // Combine all and sort by problems solved
          const allTags = [...tags.advanced, ...tags.intermediate, ...tags.fundamental];
          const sortedTags = allTags.sort((a, b) => b.problemsSolved - a.problemsSolved).slice(0, 6); // Top 6
          setSkillStats(sortedTags);
        }

        // Fetch recent submissions
        const subRes = await fetch('https://alfa-leetcode-api.onrender.com/sivalankadinesh2005/acSubmission');
        const subData = await subRes.json();
        // Take top 5 recent unique problems
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
    { label: 'Problems Solved', value: lcStats.solvedProblem, color: 'var(--accent-color)' },
    { label: 'Easy', value: lcStats.easySolved, color: '#10b981' },
    { label: 'Medium', value: lcStats.mediumSolved, color: '#f59e0b' },
    { label: 'Hard', value: lcStats.hardSolved, color: '#ef4444' }
  ];

  // Map language to Devicon or simple text
  const getLangIcon = (lang) => {
    const langLower = lang.toLowerCase();
    if (langLower.includes('java')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg';
    if (langLower.includes('python')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg';
    if (langLower.includes('cpp') || langLower.includes('c++')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg';
    return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg';
  };

  return (
    <section id="dsa" className="dsa-section section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title text-gradient">LeetCode Journey</h2>
          <p className="section-subtitle">Consistent problem solving & algorithmic thinking.</p>
        </motion.div>

        <div className="dsa-layout">
          
          {/* Row 1: Quick Stats (Full Width) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="stats-row"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-card glass text-center">
                <h4 style={{ color: stat.color }}>{loading ? <Loader2 className="animate-spin inline" size={24} /> : stat.value}</h4>
                <p>{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Row 2: Heatmap / Calendar (Full Width) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heatmap-card glass"
          >
            <div className="card-header space-between mb-4">
              <h3><Flame className="mr-2 inline" color="#f97316" size={22}/> LeetCode Submissions ({calendarData.length ? new Date(calendarData[0].date).getFullYear() : '2026'})</h3>
              <span className="streak-count">{loading ? <Loader2 className="animate-spin inline" size={16} /> : `Max Streak: ${lcCalendar.streak} Days`}</span>
            </div>
            
            <div className="calendar-wrapper">
              {loading || calendarData.length === 0 ? (
                <div className="flex justify-center py-8"><Loader2 className="animate-spin text-primary" size={32} /></div>
              ) : (
                <ActivityCalendar 
                  data={calendarData} 
                  theme={{
                    light: ['#1e293b', '#0e4429', '#006d32', '#26a641', '#39d353'],
                    dark: ['#1e293b', '#0e4429', '#006d32', '#26a641', '#39d353'],
                  }}
                  labels={{
                    totalCount: '{{count}} submissions in the last year',
                  }}
                  colorScheme={theme === 'dark' ? "dark" : "light"}
                  blockSize={14}
                  blockRadius={3}
                  blockMargin={5}
                  fontSize={14}
                  showWeekdayLabels={true}
                />
              )}
            </div>
          </motion.div>

          {/* Row 3: Topics & Recent (Two Columns) */}
          <div className="dsa-two-col">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="topics-card glass"
            >
              <div className="card-header">
                <h3><Code2 className="mr-2 inline" size={20}/> Top Strong Areas</h3>
              </div>
              <div className="topics-list mt-3">
                {loading && <div className="flex justify-center py-4"><Loader2 className="animate-spin text-primary" size={24} /></div>}
                {!loading && skillStats.map((topic, idx) => {
                  const maxProb = skillStats[0]?.problemsSolved || 1;
                  const progress = (topic.problemsSolved / maxProb) * 100;
                  return (
                    <div key={idx} className="topic-item">
                      <div className="topic-info">
                        <span>{topic.tagName}</span>
                        <span className="topic-count">{topic.problemsSolved} Solved</span>
                      </div>
                      <div className="progress-bar-bg">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="progress-bar-fill"
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="recent-card glass"
            >
              <div className="card-header space-between mb-4">
                <h3><Target className="mr-2 inline" size={20}/> Recent Solves</h3>
              </div>
              <div className="problem-list">
                {loading && <div className="flex justify-center py-4"><Loader2 className="animate-spin text-primary" size={24} /></div>}
                {!loading && recentSubs.map((sub, idx) => {
                  const timeAgo = Math.floor((Date.now() / 1000 - sub.timestamp) / 3600);
                  const timeDisplay = timeAgo < 24 ? `${timeAgo}h ago` : `${Math.floor(timeAgo/24)}d ago`;
                  return (
                    <div key={idx} className="problem-item">
                      <div className="problem-title">
                        <GitCommit size={16} className="text-primary mr-3" />
                        <span>{sub.title}</span>
                      </div>
                      <div className="problem-meta">
                        <span className="problem-time">{timeDisplay}</span>
                        <img src={getLangIcon(sub.lang)} alt={sub.lang} className="lang-icon-small" />
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          </div>

          {/* Row 4: Platform Profiles (Full Width) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="platforms-card glass"
          >
            <h3 className="text-center mb-4">Connect on Other Platforms</h3>
            <div className="profiles-grid">
              <a href="https://leetcode.com/u/sivalankadinesh2005/" target="_blank" rel="noopener noreferrer" className="profile-link">
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode" />
                <span>LeetCode</span>
              </a>
              <a href="https://www.geeksforgeeks.org/profile/dineshsivalanka" target="_blank" rel="noopener noreferrer" className="profile-link">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg" alt="GeeksforGeeks" />
                <span>GeeksforGeeks</span>
              </a>
              <a href="https://www.hackerrank.com/profile/DineshSivalanka" target="_blank" rel="noopener noreferrer" className="profile-link">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png" alt="HackerRank" />
                <span>HackerRank</span>
              </a>
              <a href="https://github.com/DineshSivalanka" target="_blank" rel="noopener noreferrer" className="profile-link">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default DSA;

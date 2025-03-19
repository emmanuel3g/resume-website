import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { AssignmentOutlined, WebOutlined } from '@mui/icons-material';

export default {
    name: 'Emmanuel Girmaye',
    title: 'Full Stack Developer',
    birthday: 'November 23rd, 2004',
    email: 'emmanuelgirmaye@gmail.com',
    phone: '651-239-3659',
    Fellowship: 'Management Leadership for Tomorrow',

    socials: {
        LinkedIn: { 
            link: 'https://www.linkedin.com/in/emmanuel-girmaye/',
            icon: <LinkedInIcon/>,
        },
        GitHub: { 
            link: 'https://github.com/emmanuel3g',
            icon: <GitHubIcon/>,
        }
    },

    about: 
    "I am a dedicated Computer Science student at the University of Minnesota, where I am also pursuing minors in Management Information Systems and Statistics. My academic achievements include a strong GPA of 3.426 and recognition through awards such as the Dean’s List, Page Scholar, and the Rev. Dr. Martin Luther King Jr Scholarship. \n\nMy coursework has equipped me with a solid foundation in programming languages like Java, Python, JavaScript, C, HTML/CSS, and R. I have applied these skills in various projects, including developing a queue system website to improve classroom TA hour management and creating interactive games like Minesweeper and Starship. These experiences have honed my abilities in object-oriented programming, advanced algorithms, and responsive design. \n\nOutside the classroom, I enjoy mentoring students as a Coding Tutor at Code Ninjas, where I've helped over 50 students bring their coding ideas to life. My Board positions with the National Society of Black Engineers and the Ethiopian Student Association have also given me valuable experience in public relations and social media marketing. \n\nFluent in both English and Amharic, I'm always eager to connect with fellow tech enthusiasts and professionals. I'm excited about the future and look forward to contributing to innovative IT solutions that make a difference. Let's connect!",

    projects: [
        {
            title: 'Queue Website',
            description: `
              <ul>
                <li>Designed the layout of a queue system website using HTML5/CSS3 to improve classroom TA hour management and lead to more efficient sessions.</li>
                <li>Applied responsive design with CSS, ensuring intuitive navigation and accessibility across phones, tablets, and computers.</li>
                <li>Built interactive queue functionality with JavaScript, laying the groundwork for real-time updates and improved user experience.</li>
              </ul>
            `,
        },
        {
            title: 'Minesweeper',
            description: `
              <ul>
                <li>Developed a fully functional Minesweeper game using object-oriented programming principles (OOP) in IntelliJ, implementing 10+ classes to manage game logic, grid generation, and user interactions.</li>
                <li>Applied advanced search algorithms (depth-first and breadth-first) using stacks and queues to enhance gameplay mechanics, ensuring efficient processing of game states and seamless navigation through complex grid structures.</li>
                <li>Debugged and tested 1,000+ lines of code to ensure smooth gameplay performance.</li>
              </ul>
            `,
        },
        {
            title: 'Starship',
            description: `
              <ul>
                <li>Developed an interactive Starship game, utilizing OOP to manage Starship controls, game mechanics, and scoring systems.</li>
                <li>Enhanced user experience by implementing robust error-handling mechanisms for 10+ types of invalid inputs and edge cases, ensuring smooth and intuitive gameplay.</li>
                <li>Added 5+ game features, including power-ups, score tracking, and difficulty scaling, increasing replayability.</li>
              </ul>
            `,
        }
    ],

    experiences: [
        {
          title: 'Coding Tutor',
          company: 'Code Ninjas',
          location: 'Edina, MN',
          date: 'December 2022 - June 2024',
          description: `
            <ul>
              <li>Facilitated coding sessions for 50+ students, teaching and reviewing JavaScript code, and assisting in developing 40+ unique video game projects, fostering problem-solving skills and independent learning.</li>
              <li>Collaborated with 10+ other tutors to plan and deliver coding workshops, ensuring cohesive teaching strategies and a supportive learning environment for all students.</li>
              <li>Represented the company at 10+ public events, engaging with 50+ potential customers and increasing program enrollment.</li>
            </ul>
          `,
        },
        {
          title: 'Public Relations Intern',
          company: 'National Society of Black Engineers (NSBE)',
          location: 'Minneapolis, MN',
          date: 'November 2024 - Present',
          description: `
            <ul>
              <li>Assisted in planning NSBE’s upcoming UMN Career Fair by emailing companies and coordinating their participation, providing valuable career opportunities for members.</li>
              <li>Coordinated the creation and distribution of newsletters and online posts, ensuring clear, consistent messaging and timely updates for NSBE members at the University of Minnesota, Twin Cities.</li>
              <li>Created and executed strategic communication plans to enhance visibility and drive participation in organizational events, boosting attendance and engagement by 10%.</li>
            </ul>
          `,
        },
        // {
        //   title: 'Career Prep Fellow',
        //   company: 'Management Leadership for Tomorrow (MLT)',
        //   location: 'Minneapolis, MN',
        //   date: 'January 2024 – Present',
        //   description: `
        //     <ul>
        //       <li>Accepted into a selective 18-month professional development program for high-achieving diverse talent.</li>
        //       <li>Completing business case studies and assignments to grow leadership and technical skills.</li>
        //     </ul>
        //   `,
        // },
        {
          title: 'Social Media/Marketing Position',
          company: 'Ethiopian Student Association (ESA)',
          location: 'Minneapolis, MN',
          date: 'August 2024 - Present',
          description: `
            <ul>
              <li>Created and managed 30+ engaging content pieces (graphics, videos, and posts) across multiple social media platforms, increasing event visibility and community engagement.</li>
              <li>Boosted social media following by 300+ in 6 months, leading to a 20% rise in event attendance.</li>
            </ul>
          `,
        },
      ],

    skills: [
        {
            title: 'FRONT-END',
            description: [
                "ReactJS",
                "JavaScript",
                "TypeScript",
                "Material UI",
            ]
        },

        {
            title: 'BACK-END',
            description: [
                "NodeJS",
                "Java",
                "Python",
            ]
        },

        {
            title: 'SOURCE CONTROL',
            description: [
                "Git",
                "GitHub",
            ]
        },

        
    ]
};
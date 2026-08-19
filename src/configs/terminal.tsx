import type { TerminalData } from "~/types";

const terminal: TerminalData[] = [
  {
    id: "about",
    title: "about",
    type: "folder",
    children: [
      {
        id: "about-bio",
        title: "bio.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div>
              Hi, this is Lucky Mishra. I'm a B.Tech CSE (AI/ML) student at ITS
              Engineering College, and a freelance web developer building modern
              websites and AI-powered digital experiences.
            </div>
          </div>
        )
      },
      {
        id: "about-interests",
        title: "interests.txt",
        type: "file",
        content: "Web Development / AI Tooling / Football / 3D & Creative Coding"
      },
      {
        id: "about-who-cares",
        title: "who-cares.txt",
        type: "file",
        content:
          "I'm open to freelance web development projects and collaborations. Currently building Devnest Studio, a service-based web agency."
      },
      {
        id: "about-contact",
        title: "contact.txt",
        type: "file",
        content: (
          <ul className="list-disc ml-6">
            <li>
              Email:{" "}
              <a
                className="text-blue-300"
                href="mailto:lm857133@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                lm857133@gmail.com
              </a>
            </li>
            <li>
              Github:{" "}
              <a
                className="text-blue-300"
                href="https://github.com/Loki4710y"
                target="_blank"
                rel="noreferrer"
              >
                @Loki4710y
              </a>
            </li>
            <li>
              Linkedin:{" "}
              <a
                className="text-blue-300"
                href="https://www.linkedin.com/in/lucky-mishra-2a3ab62b2/"
                target="_blank"
                rel="noreferrer"
              >
                lucky-mishra
              </a>
            </li>
          </ul>
        )
      }
    ]
  },
  {
    id: "about-dream",
    title: "my-dream.cpp",
    type: "file",
    content: (
      <div className="py-1">
        <div>
          <span className="text-yellow-400">while</span>(
          <span className="text-blue-400">building</span>) <span>{"{"}</span>
        </div>
        <div>
          <span className="text-blue-400 ml-9">skills</span>
          <span className="text-yellow-400">++</span>;
        </div>
        <div>
          <span>{"}"}</span>
        </div>
      </div>
    )
  }
];

export default terminal;

import type { FC } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface AboutProps {}

const About: FC<AboutProps> = () => {
  return (
    <div id="About" className="p-10 grid grid-cols-1 auto-rows-max gap-2">
      <h1 className="text-3xl font-bold">About</h1>
      <p>
        Template for React project with Vite, Typescript, Tailwind CSS, Shadcn
        UI and Storybook.js included
      </p>
    </div>
  )
}

export default About;

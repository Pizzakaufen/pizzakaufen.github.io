import { Layout } from '../components/Layout';
import { Hero } from '../sections/Hero';
import { About } from '../sections/About';
import { Skills } from '../sections/Skills';
import { Projects } from '../sections/Projects';
import { Github } from '../sections/Github';
import { Contact } from '../sections/Contact';

export default function Home() {
  return (
    <Layout pageKey="home">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Github />
      <Contact />
    </Layout>
  );
}

import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Hero from '../components/hero/hero';
import { ProjectGallery } from '../components/home/project-gallery';

export default component$(() => {
  return (
    <main>
      <Hero />
      <ProjectGallery />
    </main>
  );
});

export const head: DocumentHead = {
  title: 'Home - Cloud Portfolio',
  meta: [
    {
      name: 'description',
      content: 'Mark Angelo D. Siazon\'s Cloud Computing Portfolio featuring projects in SpringBoot, AWS, Docker, Kubernetes, and Terraform.',
    },
  ],
};

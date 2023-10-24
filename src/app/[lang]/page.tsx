import { About } from "@/components/about";
import { Achievements } from "@/components/achievements";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects";

import type { Locale } from "@/i18n-config";
import { getDictionary } from "@/lib/get-dictionary";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);

  const github = await fetch(`https://api.github.com/users/pedrohxiv`).then(
    (response) => response.json()
  );

  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar dict={dict.navbar} />
      <div className="container mt-24 mx-auto px-12 py-4">
        <Hero dict={dict.hero} />
        <Achievements dict={dict.achievements} repos={github.public_repos} />
        <About dict={dict.about} />
        <Projects dict={dict.projects} />
        <Contact dict={dict.contact} />
      </div>
      <Footer dict={dict.footer} />
    </main>
  );
}

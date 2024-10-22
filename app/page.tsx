import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Denis Gremaud
      </h1>
      <p className="mb-4">
        {`Récent diplômé en ingénierie informatique de l'HEPIA, je suis passionné par le développement web et l'intelligence artificielle. 
		Ma formation m'a doté d'une solide compréhension des fondements de l'informatique et de compétences pratiques avancées. 
		Je suis maintenant prêt à mettre en application mes connaissances techniques et ma passion pour l'innovation au sein d'une entreprise dynamique. 
		Enthousiaste à l'idée de contribuer à des projets stimulants, je cherche des opportunités pour appliquer et développer mes compétences en développement logiciel, en particulier dans les domaines du web et de l'IA.`}
      </p>
      <div className="my-8">
        {/* <BlogPosts /> */}
      </div>
    </section>
  )
}

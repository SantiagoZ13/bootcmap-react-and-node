import Card from './components/Card/Card'
import Button from './components/Button/Button'
import Link from './components/Link/Link'
function App() {

  const articles = [
    {
      unsplashID:"photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      unsplashAlt:"Web Components",
      tags: ["Design", "Web Components"],
      title:"Evolución de las Arquitecturas y Metodologías de CSS",
      extract:"Las Arquitecturas de CSS nos ayudan a escalar y mantener nuestras hojas de estilo en el tiempo. Estas son necesarias porque, el CSS, al carecer de un sistema de módulos conveniente y debido a su naturaleza...",
      author:"Guillermo Rodas",
      date:"2024-08-01",
      readTime: "7 minutos"
    },
    {
      unsplashID:"photo-1519389950473-47ba0277781c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      unsplashAlt:"Web Components",
      tags: ["Web", "Javascript"],
      title:"Evolución de las Arquitecturas y Metodologías de CSS",
      extract:"Las Arquitecturas de CSS nos ayudan a escalar y mantener nuestras hojas de estilo en el tiempo. Estas son necesarias porque, el CSS, al carecer de un sistema de módulos conveniente y debido a su naturaleza...",
      date:"2024-08-01",
      author:"Guillermo Rodas",
      readTime: "7 minutos"
    },
    {
      unsplashID:"photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      unsplashAlt:"Web Components",
      tags: ["Css", "Sass", "Web Components"],
      title:"Evolución de las Arquitecturas y Metodologías de CSS",
      extract:"Las Arquitecturas de CSS nos ayudan a escalar y mantener nuestras hojas de estilo en el tiempo. Estas son necesarias porque, el CSS, al carecer de un sistema de módulos conveniente y debido a su naturaleza...",
      author:"Guillermo Rodas",
      date:"2024-08-01",
      readTime: "7 minutos"
    },
    {
      unsplashID:"photo-1519389950473-47ba0277781c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      unsplashAlt:"Web Components",
      tags: ["Design", "Web Components"],
      title:"Evolución de las Arquitecturas y Metodologías de CSS",
      extract:"Las Arquitecturas de CSS nos ayudan a escalar y mantener nuestras hojas de estilo en el tiempo. Estas son necesarias porque, el CSS, al carecer de un sistema de módulos conveniente y debido a su naturaleza... Las Arquitecturas de CSS nos ayudan a escalar y mantener nuestras hojas de estilo en el tiempo.",
      date:"2024-08-01",
      author:"Guillermo Rodas",
      readTime: "7 minutos"
    },
    {
      unsplashID:"photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      unsplashAlt:"Web Components",
      tags: ["Design", "Web Components"],
      title:"Evolución de las Arquitecturas y Metodologías de CSS",
      extract:"Las Arquitecturas de CSS nos ayudan a escalar y mantener nuestras hojas de estilo en el tiempo. Estas son necesarias porque, el CSS, al carecer de un sistema de módulos conveniente y debido a su naturaleza...",
      author:"Guillermo Rodas",
      date:"2024-08-01",
      readTime: "7 minutos"
    },
    {
      unsplashID:"photo-1519389950473-47ba0277781c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      unsplashAlt:"Web Components",
      tags: ["Design", "Web Components"],
      title:"Evolución de las Arquitecturas y Metodologías de CSS",
      extract:"Las Arquitecturas de CSS nos ayudan a escalar y mantener nuestras hojas de estilo en el tiempo. Estas son necesarias porque, el CSS, al carecer de un sistema de módulos conveniente y debido a su naturaleza...",
      date:"2024-08-01",
      author:"Guillermo Rodas",
      readTime: "7 minutos"
    },
    {
      unsplashID:"photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      unsplashAlt:"Web Components",
      tags: ["Design", "Web Components"],
      title:"Evolución de las Arquitecturas y Metodologías de CSS",
      extract:"Las Arquitecturas de CSS nos ayudan a escalar y mantener nuestras hojas de estilo en el tiempo. Estas son necesarias porque, el CSS, al carecer de un sistema de módulos conveniente y debido a su naturaleza...",
      author:"Guillermo Rodas",
      date:"2024-08-01",
      readTime: "7 minutos"
    },
    {
      unsplashID:"photo-1519389950473-47ba0277781c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      unsplashAlt:"Web Components",
      tags: ["Design", "Web Components"],
      title:"Evolución de las Arquitecturas y Metodologías de CSS",
      extract:"Las Arquitecturas de CSS nos ayudan a escalar y mantener nuestras hojas de estilo en el tiempo. Las Arquitecturas de CSS nos ayudan a escalar y mantener nuestras hojas de estilo en el tiempo. Estas son necesarias porque, el CSS, al carecer de un sistema de módulos conveniente y debido a su naturaleza...",
      date:"2024-08-01",
      author:"Guillermo Rodas",
      readTime: "7 minutos"
    }
  ]

  return (
    <>
      <div className="main-container">
        <header className="main-header">
          <img src="/images/logos/undefined-shell.svg" alt="logo de undefined shell" />
          <nav>
            <ul className="nav-list">
              <Link isActive={true}>Inicio</Link>
              <Link>Suscribete</Link>
              <Button type="primary">Undefined Academy</Button>
              <Button type="secondary">Discord</Button>
            </ul>
          </nav>
        </header>
        <main>
          <section className="featured-post">
            <article>

            </article>

            <div className="button-container">
              <button>Adelante<img src="/images/icons/flechaleft.png" /></button>
              <button>Atras<img src="/images/icons/flecha.png" /></button>
            </div>
          </section>
          <section className="post-list-container">

            <div className="post-list">
              {articles.map((article, index) =>{
                const isExtended = (index + 1) % 4 === 0
                const isReversed = (index + 1) % 8 === 0

                return <Card {...article} isExtended={isExtended} isReverse={isReversed}></Card>

            })}
            </div>

          </section>
        </main>
      </div>

      <footer>

      </footer>
    </>
  )
}

export default App

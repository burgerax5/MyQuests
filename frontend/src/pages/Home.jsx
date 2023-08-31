import { FaChevronRight } from 'react-icons/fa'

function Home() {
  return (
    <>
      <main className="dashboard">
        <aside className="dashboard-side">
          <h2>Quests</h2>
          <a className="dashboard-btn">
            Visit
            <div className="dashboard-btn-circle">
              <FaChevronRight />
            </div>
          </a>
        </aside>
        <article className="dashboard-main">
          <h2>Keep track of your goals!</h2>
        </article>
      </main>
    </>
  )
}

export default Home
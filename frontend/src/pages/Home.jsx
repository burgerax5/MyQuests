import { FaChevronRight } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import MondstadtBg from '../images/mondstadt_bg.jpg'

function Home() {
  const { user } = useSelector((state) => state.auth)

  return (
    <>
      <div className="dashboard-container">
        {/* <h2>Welcome, {user.username}</h2> */}
        <main className="dashboard">
          <aside className="dashboard-side">
            <h2>Quests</h2>
            {user ? (
              <Link to='/quests' className="dashboard-btn">
                Visit
                <div className="dashboard-btn-circle">
                  <FaChevronRight />
                </div>
              </Link>
            ) : (
              <Link to='/login' className="dashboard-btn">
                Visit
                <div className="dashboard-btn-circle">
                  <FaChevronRight />
                </div>
              </Link>
            )}
          </aside>
          <section className="dashboard-main">
            <article className="about">
              <h2>Keep track of your goals!</h2>
              <div className="about-images">
                <img src={MondstadtBg} />
                <img src={MondstadtBg} />
                <img src={MondstadtBg} />
              </div>
              <p>Choose a category and create a new quest for yourself. You’re able to add extra details such as the steps involved in achieving your goal, a description of the quest, if the quest should repeat and even the rewards for completing the quest.</p>
            </article>
            <hr></hr>
            <div>
              <h2>Genshin Impact Tools</h2>
              <div className="genshin-impact-tools">
                <img src={MondstadtBg} />
                <img src={MondstadtBg} />
                <img src={MondstadtBg} />
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export default Home
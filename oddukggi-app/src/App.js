// import logo from './logo.svg';
import './css/reset.css';
import './css/style.css';
import FilterButton from "./components/FilterButton";

function App() {

  return (
<section className="index-cont">
        <div id="mapCont" className="off"></div>

        <div id="searchFilter" className="">
          <article className="search-filterPage-cont">
            <form className="filter-item">
              <h2 className="filter-title">떡 종류</h2>
              <div className="filter-btn-cont">
                <FilterButton idname="flour" text="밀떡" />
                <FilterButton idname="rice" text="쌀떡" />
              </div>
            </form>
            <form className="filter-item">
              <h2 className="filter-title">떡볶이 양념</h2>
              <div className="filter-btn-cont">
                <FilterButton idname="basic-source" text="기본" />
                <FilterButton idname="cream-source" text="크림" />
                <FilterButton idname="rose-source" text="로제" />
                <FilterButton idname="jja-source" text="짜장" />
                <FilterButton idname="curry-source" text="카레" />
              </div>
            </form>
          </article>
        </div>

        <header className="head-cont">
            <article className="index-nav-cont">
                <a className="userpage-btn-cont" href="#">
                    <ion-icon name="person"></ion-icon>
                </a>
                <article className="main-nav">
                    <h1 className="logo">오떠끼 로고</h1>
                    <form action="" className="search-cont">
                        <input type="text" id="searchInput" placeholder="오늘 땡기는 떡볶이는?" />
                        <button type="button" id="searchBtn">
                            <ion-icon name="search"></ion-icon>
                        </button>
                    </form>
                </article>
            </article>

            <article className="search-nav-cont">
                <h2>오늘 땡기는 떡볶이는?</h2>
            </article>
        </header>

    </section>
    
  );
}

export default App;

import * as TopPage from "./_features/TopPage/index";

export default function Top() {
  return (
    <>
      <div className="content">
        <TopPage.TopHello />
        <TopPage.TopAboutMe />
        <TopPage.TopUnivAndRobocon />
        <TopPage.TopProducts />
        <TopPage.TopSkills />
        <TopPage.TopPrivate />
      </div>
    </>
  )
}
import React from "react"
import "./UserHome.css"
import LogInHeader from "../../components/shared/LogInHeader/LogInHeader"
import Footer from "../../components/shared/Footer/Footer"


const UserHome = () => {
  return (
    <>
      <LogInHeader />
      <main>
        <table>
          <tbody>
            <tr className="rows">
              <td className="local-events">Local Events</td>
              <td className="weather">Weather</td>
            </tr>
            <tr className="rows">
              <td className="restaurants">Restaurants</td>
              <td className="currency">Currency</td>
            </tr>
            <tr className="rows">
              <td className="transportation">Transportation</td>
              <td className="languages">Languages</td>
            </tr>
            <tr className="rows">
              <td className="culture">Culture</td>
              <td className="shoppping">Shopping</td>
            </tr>
          </tbody>

        </table>
        {/* <div className="local-events">Local Events</div>
        <div className="weather">Weather</div>
        <div className="restaurants">Restaurants</div>
        <div className="currency">Currency</div>
        <div className="transportation">Transporation</div>
        <div className="languages">Languages</div>
        <div className="culture">Culture</div>
        <div className="shopping">Shopping</div> */}
      </main>
      <Footer />
    </>
  )
}

export default UserHome 
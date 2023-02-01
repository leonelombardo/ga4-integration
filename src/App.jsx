import ReactGA from "react-ga4"

import { Button } from "./components/Button"

ReactGA.initialize("G-X5BPNL86DX")

export const App = () => {
  const handleClick = (event) => {
    ReactGA.event({ action: event.target.name, category: "interaction", label: event.target.name })
  }

  return (
    <>
      <main className="max-w-screen w-full h-screen flex flex-col items-center justify-between bg-gradient-to-br from-slate-900 to-slate-500">
        <article className="max-w-[1000px] w-full h-full flex flex-col justify-center gap-12 p-12">
          <section className="flex flex-col items-center gap-8">
            <h1 className="text-5xl xs:text-7xl sm:text-8xl text-center font-bold text-white">GA4 Integration</h1>
            <h1 className="text-xl xs:text-2xl sm:text-3xl text-center max-w-[700px] text-slate-300">Start clicking and every button will send a new event to Google Analytics with its name.</h1>
          </section>
          <section className="flex justify-center gap-2 flex-wrap">
            <Button name="login_button" onClick={handleClick}>login_button</Button>
            <Button name="signup_button" onClick={handleClick}>signup_button</Button>
            <Button name="logout_button" onClick={handleClick}>logout_button</Button>
            <Button name="send_email_button" onClick={handleClick}>send_email_button</Button>
          </section>
        </article>
        <footer className="p-4 w-full flex justify-center items-center">
          <h1 className="text-sm text-slate-400">Developed by <a href="https://linkedin.com/in/leonelombardo" target="_blank" className="text-slate-300">Leonel Lombardo</a></h1>
        </footer>
      </main>
    </>
  )
}
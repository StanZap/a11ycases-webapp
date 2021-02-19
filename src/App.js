import React from 'react';
import './App.css';
import {renderToString} from 'react-dom/server'
import { html as htmlBeautifyer } from 'js-beautify'
import {
    ListItemsCase,
    RoleTextCase,
    AutoFocusReadingCase
}  from './cases'
import {ButtonCase} from "./cases/ButtonCase";

const Separator = () => <div className=" px-5 h-1 bg-gray-400 my-10" ></div>


const ShowCode = (props) => {
  return (
    <div className="text-lg px-5">
      <div className="text-wrap overflow-hidden">
        {props.children}
      </div>
    </div>
  )
}

const PrintCode = (props) => {
  return (
      <section aria-hidden={true} className="overflow-auto bg-gray-100">
      <pre>
        <code className="language-html text-wrap h-64 bg-gray-400">
            { htmlBeautifyer(
                renderToString(props.children)
            )}
        </code>
      </pre>
      </section>
  )
}

const Cases = [
    ListItemsCase,
    RoleTextCase,
    AutoFocusReadingCase,
    ButtonCase
]
const CaseList = () => Cases.map((Case, i) => (
    <section key={i} className={
        'py-20 px-5 ' + ( i%2===1 ? 'bg-gray-300' : 'bg-gray-200')
        }>
        <ShowCode>
            <Case />
        </ShowCode>

        <Separator/>

        <PrintCode>
            <Case />
        </PrintCode>
    </section>
))


function App() {
  return (
    <div className="h-screen flex flex-col bg-orange-200 overflow-auto">
      <header className="py-5 bg-gray-800 text-gray-200 text-center">
        <h1>Web Accessibility</h1>
        <h2>Use Cases</h2>
      </header>

      <main className="bg-gray-200 flex-auto">
          <CaseList />
      </main>
    </div>
  );
}

export default App;

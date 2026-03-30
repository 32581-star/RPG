import { useState } from 'react'
import './App.css'

export default function App() {

  return (
    <>
      <main>
          <h1 className='Titulo'>RPG useState</h1>
          <div id ="icon">🧙‍♂️</div>
          <input type="text" placeholder="Nome do Heroi" />
          <div id="status">
            <h2>Status</h2>
            <p>Vivo</p>
            <h2>Status 2</h2>
            <p>true</p>
          </div>

          <p id="pontos">Pontos de Vida(HP) <span>100/100</span></p>
          <div id="barraVida"></div>

          <button className='acao'>⚔️ Receber dano</button>
          <button className='acao'>➕ Curar</button>

          <p id='classeHeroi'>Classe do Heroi</p>
          <button className='heroi'>🧙‍♂️Mago</button>
          <button className='heroi'>⚔️Guerreiro</button>
          <button className='heroi'>🏹Arqueiro</button>
          <button className='heroi'>➕curandeiro</button>
          
      </main>
    </>
  )
}
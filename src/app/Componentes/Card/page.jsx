'use client'
import Image from "next/image";
import { useState } from 'react';
import style from './page.module.css'
import { produtos } from '@/data/data_produtos'

export default function Card() {

const logoCarne = '/carnes/carne.png';
const logoMassa= '/massas/massa.png';
const logoSalada = '/saladas/salada.png';
const logoSobremesa = '/sobremesas/sobremesa.png';
const logoBebida = '/bebidas/bebidas.png';
const logoEntrada = '/entradas/entrada.png';

const [itensExibidos, setItensExibidos] = useState(produtos);


const filtrarProdutos = (categoria) => {
    const filtrados = produtos.filter(item => item.categoria === categoria);
    setItensExibidos(filtrados);
  };

  return (
    <>
    
    <div className={style.botoes}>

  <button className={style.bttn} onClick={() => filtrarProdutos('Massas')}>              <Image width={25} height={25} alt="logo.png" src = {logoMassa}/>    Massas</button>
  <button className={style.bttn} onClick={() => filtrarProdutos('Sobremesas')}>          <Image width={25} height={25} alt="logo.png" src = {logoSobremesa}/>Sobremesas</button>
  <button className={style.bttn} onClick={() => filtrarProdutos('Bebidas')}>             <Image width={25} height={25} alt="logo.png" src = {logoBebida}/>   Bebidas</button>
  <button className={style.bttn} onClick={() => filtrarProdutos('Saladas')}>             <Image width={25} height={25} alt="logo.png" src = {logoSalada}/>   Saladas</button>
  <button className={style.bttn} onClick={() => filtrarProdutos('Carnes')}>              <Image width={25} height={25} alt="logo.png" src = {logoCarne}/>    Carnes</button>
  <button className={style.bttn} onClick={() => filtrarProdutos('Entradas')}>            <Image width={25} height={25} alt="logo.png" src = {logoEntrada}/>  Entradas</button>
    </div>
    <div className={style.secao}>
      {itensExibidos.map((item) => (
        <div key={item.id} className={style.card}>
          <img src={item.imagem} alt={item.nome} />
          <h3>{item.nome}</h3>
          <p>{item.descricao}</p>
          <p>R$ {item.preco.toFixed(2)}</p>
        </div>
      ))}
    </div>

    </>
  )
}
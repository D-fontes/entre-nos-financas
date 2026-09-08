export const TODAY='2026-06-15';
export const seed=()=>({initial:220000,reserve:80000,goal:500000,connected:false,history:[],items:[
{id:'salary',name:'Salário · Alex',amount:650000,type:'income',category:'Trabalho',due:'2026-06-05',month:'2026-06',paid:true,date:'2026-06-05',account:'Conta principal',method:'Transferência'},
{id:'rent',name:'Aluguel',amount:180000,type:'expense',category:'Moradia',due:'2026-06-08',month:'2026-06',paid:true,date:'2026-06-08',account:'Conta principal',method:'Pix'},
{id:'market',name:'Mercado da semana',amount:42000,type:'expense',category:'Alimentação',due:'2026-06-12',month:'2026-06',paid:true,date:'2026-06-12',account:'Conta principal',method:'Débito'},
{id:'light',name:'Energia elétrica',amount:18690,type:'expense',category:'Moradia',due:'2026-06-14',month:'2026-06',paid:false},
{id:'net',name:'Internet de casa',amount:11990,type:'expense',category:'Moradia',due:'2026-06-18',month:'2026-06',paid:false},
{id:'health',name:'Plano de saúde',amount:46000,type:'expense',category:'Saúde',due:'2026-06-22',month:'2026-06',paid:false},
{id:'course',name:'Curso de fotografia · 2/4',amount:15000,type:'expense',category:'Educação',due:'2026-06-25',month:'2026-06',paid:false},
{id:'extra',name:'Projeto · Bia',amount:120000,type:'income',category:'Trabalho',due:'2026-06-28',month:'2026-06',paid:false}]});
export function totals(s){const balance=s.initial+s.items.filter(x=>x.paid).reduce((n,x)=>n+(x.type==='income'?x.amount:-x.amount),0);const open=s.items.filter(x=>!x.paid&&x.type==='expense'&&x.due&&x.due<='2026-06-30').reduce((n,x)=>n+x.amount,0);return {balance,open,available:balance-open-s.reserve};}
export function settle(s,id,payment){const x=s.items.find(x=>x.id===id);if(!x||x.paid)return false;if(!payment.date||!payment.account||!payment.method)throw Error('Informe data, conta e forma.');Object.assign(x,payment,{paid:true});s.history.push({action:'Liquidação',id,date:payment.date});return true;}
export function undo(s,id){const x=s.items.find(x=>x.id===id);if(!x?.paid)return false;x.paid=false;delete x.date;delete x.account;delete x.method;s.history.push({action:'Liquidação desfeita',id});return true;}
export function report(s,regime='competence',type='all',month='2026-06'){return s.items.filter(x=>(type==='all'||x.type===type)&&(regime==='cash'?x.paid&&x.date?.startsWith(month):x.month===month));}

function caclular(){
    let c = Number(capital.value)
    let i = Number(taxa_mes.value)
    let n = Number(meses_divida.value)
    let i_total = i / 100
    let juros_total = c*(i_total*n)
    
    resultado.innerHTML = ''

    if(i <=0 || c<=0 || n <=0 ){
        alert("Numero inválido tente novamente")
    }
  else{
    resultado.innerHTML = `O Juros ao Total de ${n} Meses Ficaram no Total de R$ ${juros_total.toFixed(2)}`
}
}
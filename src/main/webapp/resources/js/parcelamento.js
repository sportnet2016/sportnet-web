$(function () {
    var parcelamento;
    parcelamento = $(".detalhesProduto").text().replace("R$","");
    parcelamento = parseFloat(parcelamento);
    parcelamento /= 4;
    parcelamento = parcelamento.toFixed(2);
    $(".detalhesProduto p:nth-of-type(2)").html("4x de R$ "+parcelamento+" sem juros");
});
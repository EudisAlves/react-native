const Share = ({ selectedOption }) => {
  const compartilharTemperos = () => {
    const mensagem = `Tipo de carne: ${selectedOption}\n`
      + `Quantidade de tempero: ${quantidadeTempero}g\n`
      + `Quantidade de colorau: ${quantidadeColorau}g\n`
      + `Quantidade de alho: ${quantidadeAlho}g\n`
      + `Quantidade de óleo: ${quantidadeOleo}g\n`
      + `Quantidade de limão: ${quantidadeLimao}\n`
      + `Quantidade de louro: ${quantidadeLouro}g`;

    Share.share({
      message: mensagem,
    });
  };

  return <Button title="Compartilhar" onPress={compartilharTemperos} />;
};

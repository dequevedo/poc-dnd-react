const Challenge1 = () => {

    const a = 10;
    const b = 6;
    
    const soma = (x, y) => {
        const resultado = x + y;
        console.log(resultado)
      return resultado;
    }

    return (
        <div>
            <p>{soma(a, b)}</p>
        </div>
    );
};

export default Challenge1;
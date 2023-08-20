
import Loading from './Loading';
import MusicPlayer from './MusicPlayer';


const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simule um processo de carregamento
    setTimeout(() => {
      setIsLoading(false); // Mudar o estado após 2 segundos
    }, 2000); // Atraso de 2 segundos

    // Lógica adicional de carregamento
  }, []);

  return isLoading ? <Loading /> : <MusicPlayer />;
};

export default App;

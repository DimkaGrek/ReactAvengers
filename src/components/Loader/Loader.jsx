import { Watch } from 'react-loader-spinner';
import s from './Loader.modules.css';

const Loader = () => {
  return (
    <div className="backdrop">
      <Watch
        visible={true}
        height="80"
        width="80"
        radius="48"
        color="#0ef387"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClass=""
        className={s.loader}
      />
    </div>
  );
};

export default Loader;

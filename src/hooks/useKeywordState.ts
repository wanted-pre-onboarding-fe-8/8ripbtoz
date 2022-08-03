import { useRecoilState } from 'recoil';
import { keywordAtom } from '../store/searchAtom';

export default function useKeywordState() {
  const [keyword, setKeword] = useRecoilState(keywordAtom);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeword(e.target.value);
  };

  return { keyword, onChange };
}

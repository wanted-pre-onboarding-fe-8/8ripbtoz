import { useRecoilState } from 'recoil';
import { keywordAtom } from '../store/searchAtom';
import { debounce } from '../utils/optimization';

export default function useKeywordState() {
  const [keyword, setKeword] = useRecoilState(keywordAtom);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeword(e.target.value);
  };

  const debouncedSet = debounce<string>((value) => setKeword(value));
  const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    debouncedSet(e.target.value);
  };

  return { keyword, onChange, onKeyUp };
}

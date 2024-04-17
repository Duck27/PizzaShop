import React, {
  ChangeEvent,
  SVGAttributes,
  useCallback,
  useRef,
  useState,
} from "react";
import styles from "./Search.module.scss";
import SearchIcon from "../../assets/search_icon.svg";
import CloseIcon from "../../assets/close_icon.svg";
import { setSearch } from "../../redux/slices/filter/slice";
import { useDispatch } from "react-redux";
import { debounce } from "lodash";

const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>();
  const inputField = useRef<HTMLInputElement>(null);

  function onClickClear() {
    setValue("");
    updateSearchValue("");
    inputField.current?.focus();
  }

  const updateSearchValue = useCallback(
    debounce((str) => {
      dispatch(setSearch(str));
    }, 500),
    []
  );

  function onChangeInput(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  }

  return (
    <div className={styles.root}>
      <img src={SearchIcon} className={styles.icon} />
      <input
        ref={inputField}
        type="text"
        placeholder="Поиск пиццы..."
        className={styles.input}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          onChangeInput(e);
        }}
      />
      {value && (
        <img
          src={CloseIcon}
          className={styles.clear_icon}
          onClick={() => {
            onClickClear();
          }}
        />
      )}
    </div>
  );
};

export default Search;

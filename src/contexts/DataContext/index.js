import PropTypes from "prop-types";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const DataContext = createContext({});

export const api = {
  loadData: async () => {
    const json = await fetch("/events.json");
    return json.json();
  },
};

export const DataProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [byDateDesc, setByDateDesc] = useState([]) // byDateDesc = Evenements du tableau "focus" du fichier events.json triés du plus ancien au plus récent
  const [last, setLast]  = useState(null); // last = Dernier évènement en date du tableau "events" du fichier events.json 

  const getData = useCallback(async () => {
    try {
      setData(await api.loadData());
    } catch (err) {
      setError(err);
    }
  }, []);

  useEffect(() => {
    if (data) {

      if (data.events) {
      const dataEventSorted = data.events.sort((evtA, evtB) => 
        new Date(evtA.date) > new Date(evtB.date) ? -1 : 1)
        const lastEvent = dataEventSorted[0]
      setLast(lastEvent)

      // console.log(lastEvent);
      // console.log(last);

      }

      if (data.focus) {

      const dataFocusSorted = data.focus.sort((evtA, evtB) =>
        new Date(evtA.date) < new Date(evtB.date) ? -1 : 1
      )
      setByDateDesc(dataFocusSorted)

      // console.log(dataFocusSorted);
      // console.log(byDateDesc);
      }

    } else {
    getData();
    }
  }, [data]);
  
  return (
    <DataContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        data,
        byDateDesc,
        last,
        error,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const useData = () => useContext(DataContext);

export default DataContext;

import { createStore, compose } from "redux"; // Importamos 'compose' para combinar enhancers
import rootReducer from "./reducer"; // Importamos el reducer principal

// Habilitamos Redux DevTools manualmente si está disponible en el navegador
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Creamos el store utilizando el reducer y la configuración de DevTools
const store = createStore(
    rootReducer, // Reducer principal que define el estado inicial y cómo cambiarlo
    composeEnhancers() // Habilita Redux DevTools si está instalado en el navegador
);

export default store; // Exportamos el store para usarlo en toda la aplicación

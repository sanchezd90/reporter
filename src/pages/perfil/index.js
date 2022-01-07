import React, { useState } from "react";
import useFetchUser from "../../utils/useFetchUser";
import axios from "axios";
import Layout from "../../components/layout";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Card, Grid, TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

const useStyles = makeStyles({
  header: {
    backgroundColor: "#f8bd32",
    color: "#93331d",
    width: "100%",
    height: "54.5px",
    paddingLeft: "20px",
    paddingTop: "12px",
    marginTop: "10px",
    borderRadius: "10px",
  },
  header2: {
    backgroundColor: "#0C4A60",
    color: "white",
    width: "70%",
    height: "54.5px",
    paddingLeft: "20px",
    paddingTop: "12px",
    marginTop: "10px",
    borderRadius: "10px",
  },
  btnGrad: {
    background:
      "linear-gradient(to right, #E44D26 0%, #F16529  51%, #E44D26  100%)",
    "&:hover": {
      backgroundPosition: "right center",
      color: "#ffce59",
      textDecoration: "none",
    },
    margin: "10px",
    textAlign: "center",
    textTransform: "uppercase",
    transition: "0.5s",
    backgroundSize: "200% auto",
    color: "#ffce59",
    boxShadow: "0 0 20px #eee",
    borderRadius: "10px",
    display: "block",

    height: "55px",
  },
  option: {
    fontSize: 15,
    "& > span": {
      marginRight: 10,
      fontSize: 18,
    },
  },
});

const Perfil = () => {
  const classes = useStyles();
  const [user, setUser] = useState();
  const [edit, setEdit] = useState(false);  
  const [value, setValue] = useState('Argentina');
  const [inputValue, setInputValue] = useState('Argentina');

  useFetchUser({
    setUser,
    setValue,
    setInputValue    
  });

  const saveChanges = async () => {
    try{
      await axios.post(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/api/users/edit`,{
        "email":user?.email,
        "username":user?.username,
        "country":value
    })
    setUser({...user,country:value})
    }catch(error){
      console.log(error)
    }
  }

  return (
    <div>
      <Layout>
        <Grid container style={{ marginLeft: "30px" }}>
          <h2 className={classes.header}>Perfil</h2>
          {user && (
            <>
              <h2 className={classes.header2}>
                {user.email} (
                {user.valid_email ? "verificado" : "sin verificar"})
              </h2>
              {!edit ? (
                <Card style={{ width: "70%" }}>
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                    style={{ marginLeft: "20px" }}
                  >
                    <Grid item xs={3}>
                      <div>
                        <p>
                          <strong>Usuario: </strong>
                          {user.username ? user.username : "sin completar"}
                        </p>
                      </div>
                    </Grid>
                    <Grid item xs={3}>
                      <div>
                        <p>
                          <strong>País: </strong>
                          {user.country ? user.country : "sin completar"}
                        </p>
                      </div>
                    </Grid>
                    <Grid item xs={3}>
                      <Button
                        variant="contained"
                        className={classes.btnGrad}
                        onClick={() => setEdit(true)}
                      >
                        Editar
                      </Button>
                    </Grid>
                  </Grid>
                </Card>
              ) : (
                <Card style={{ width: "70%" }}>
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                    style={{ marginLeft: "20px" }}
                  >
                    <Grid item xs={3}>
                      <div>
                        <TextField
                          id="username"
                          type="text"
                          label="Usuario"
                          variant="outlined"
                          value={user.username}
                          onChange={(e) =>
                            setUser({ ...user, username: e.target.value })
                          }
                        />
                      </div>
                    </Grid>
                    <Grid item xs={4}>
                      <Autocomplete
                        value={value}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                        inputValue={inputValue}
                        onInputChange={(event, newInputValue) => {
                          setInputValue(newInputValue);
                        }}
                        id="controllable-states-demo"
                        options={options}                        
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="País"
                            variant="outlined"
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <Button
                        variant="contained"
                        className={classes.btnGrad}
                        onClick={() => {
                          saveChanges();
                          setEdit(false);
                        }}
                      >
                        Guardar
                      </Button>
                    </Grid>
                  </Grid>
                </Card>
              )}
            </>
          )}
        </Grid>
      </Layout>
    </div>
  );
};

export default Perfil;

const options = [
"Afganistán",
"Albania",
"Alemania",
"Andorra",
"Angola",
"Anguila",
"Antártida",
"Antigua y Barbuda",
"Arabia Saudita",
"Argelia",
"Argentina",
"Armenia",
"Aruba",
"Australia",
"Austria",
"Azerbaiyán",
"Bélgica",
"Bahamas",
"Bahrein",
"Bangladesh",
"Barbados",
"Belice",
"Benín",
"Bhután",
"Bielorrusia",
"Birmania",
"Bolivia",
"Bosnia y Herzegovina",
"Botsuana",
"Brasil",
"Brunéi",
"Bulgaria",
"Burkina Faso",
"Burundi",
"Cabo Verde",
"Camboya",
"Camerún",
"Canadá",
"Chad",
"Chile",
"China",
"Chipre",
"Ciudad del Vaticano",
"Colombia",
"Comoras",
"República del Congo",
"República Democrática del Congo",
"Corea del Norte",
"Corea del Sur",
"Costa de Marfil",
"Costa Rica",
"Croacia",
"Cuba",
"Curazao",
"Dinamarca",
"Dominica",
"Ecuador",
"Egipto",
"El Salvador",
"Emiratos Árabes Unidos",
"Eritrea",
"Eslovaquia",
"Eslovenia",
"España",
"Estados Unidos de América",
"Estonia",
"Etiopía",
"Filipinas",
"Finlandia",
"Fiyi",
"Francia",
"Gabón",
"Gambia",
"Georgia",
"Ghana",
"Gibraltar",
"Granada",
"Grecia",
"Groenlandia",
"Guadalupe",
"Guam",
"Guatemala",
"Guayana Francesa",
"Guernsey",
"Guinea",
"Guinea Ecuatorial",
"Guinea-Bissau",
"Guyana",
"Haití",
"Honduras",
"Hong kong",
"Hungría",
"India",
"Indonesia",
"Irán",
"Irak",
"Irlanda",
"Isla Bouvet",
"Isla de Man",
"Isla de Navidad",
"Isla Norfolk",
"Islandia",
"Islas Bermudas",
"Islas Caimán",
"Islas Cocos (Keeling)",
"Islas Cook",
"Islas de Åland",
"Islas Feroe",
"Islas Georgias del Sur y Sandwich del Sur",
"Islas Heard y McDonald",
"Islas Maldivas",
"Islas Malvinas",
"Islas Marianas del Norte",
"Islas Marshall",
"Islas Pitcairn",
"Islas Salomón",
"Islas Turcas y Caicos",
"Islas Ultramarinas Menores de Estados Unidos",
"Islas Vírgenes Británicas",
"Islas Vírgenes de los Estados Unidos",
"Israel",
"Italia",
"Jamaica",
"Japón",
"Jersey",
"Jordania",
"Kazajistán",
"Kenia",
"Kirguistán",
"Kiribati",
"Kuwait",
"Líbano",
"Laos",
"Lesoto",
"Letonia",
"Liberia",
"Libia",
"Liechtenstein",
"Lituania",
"Luxemburgo",
"México",
"Mónaco",
"Macao",
"Macedônia",
"Madagascar",
"Malasia",
"Malawi",
"Mali",
"Malta",
"Marruecos",
"Martinica",
"Mauricio",
"Mauritania",
"Mayotte",
"Micronesia",
"Moldavia",
"Mongolia",
"Montenegro",
"Montserrat",
"Mozambique",
"Namibia",
"Nauru",
"Nepal",
"Nicaragua",
"Niger",
"Nigeria",
"Niue",
"Noruega",
"Nueva Caledonia",
"Nueva Zelanda",
"Omán",
"Países Bajos",
"Pakistán",
"Palau",
"Palestina",
"Panamá",
"Papúa Nueva Guinea",
"Paraguay",
"Perú",
"Polinesia Francesa",
"Polonia",
"Portugal",
"Puerto Rico",
"Qatar",
"Reino Unido",
"República Centroafricana",
"República Checa",
"República Dominicana",
"República de Sudán del Sur",
"Reunión",
"Ruanda",
"Rumanía",
"Rusia",
"Sahara Occidental",
"Samoa",
"Samoa Americana",
"San Bartolomé",
"San Cristóbal y Nieves",
"San Marino",
"San Martín (Francia)",
"San Pedro y Miquelón",
"San Vicente y las Granadinas",
"Santa Elena",
"Santa Lucía",
"Santo Tomé y Príncipe",
"Senegal",
"Serbia",
"Seychelles",
"Sierra Leona",
"Singapur",
"Sint Maarten",
"Siria",
"Somalia",
"Sri lanka",
"Sudáfrica",
"Sudán",
"Suecia",
"Suiza",
"Surinám",
"Svalbard y Jan Mayen",
"Swazilandia",
"Tayikistán",
"Tailandia",
"Taiwán",
"Tanzania",
"Territorio Británico del Océano Índico",
"Territorios Australes y Antárticas Franceses",
"Timor Oriental",
"Togo",
"Tokelau",
"Tonga",
"Trinidad y Tobago",
"Tunez",
"Turkmenistán",
"Turquía",
"Tuvalu",
"Ucrania",
"Uganda",
"Uruguay",
"Uzbekistán",
"Vanuatu",
"Venezuela",
"Vietnam",
"Wallis y Futuna",
"Yemen",
"Yibuti",
"Zambia",
"Zimbabue"
];

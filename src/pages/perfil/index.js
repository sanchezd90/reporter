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
      console.log(error.response.data)
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
                          <strong>Pa??s: </strong>
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
                            label="Pa??s"
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
"Afganist??n",
"Albania",
"Alemania",
"Andorra",
"Angola",
"Anguila",
"Ant??rtida",
"Antigua y Barbuda",
"Arabia Saudita",
"Argelia",
"Argentina",
"Armenia",
"Aruba",
"Australia",
"Austria",
"Azerbaiy??n",
"B??lgica",
"Bahamas",
"Bahrein",
"Bangladesh",
"Barbados",
"Belice",
"Ben??n",
"Bhut??n",
"Bielorrusia",
"Birmania",
"Bolivia",
"Bosnia y Herzegovina",
"Botsuana",
"Brasil",
"Brun??i",
"Bulgaria",
"Burkina Faso",
"Burundi",
"Cabo Verde",
"Camboya",
"Camer??n",
"Canad??",
"Chad",
"Chile",
"China",
"Chipre",
"Ciudad del Vaticano",
"Colombia",
"Comoras",
"Rep??blica del Congo",
"Rep??blica Democr??tica del Congo",
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
"Emiratos ??rabes Unidos",
"Eritrea",
"Eslovaquia",
"Eslovenia",
"Espa??a",
"Estados Unidos de Am??rica",
"Estonia",
"Etiop??a",
"Filipinas",
"Finlandia",
"Fiyi",
"Francia",
"Gab??n",
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
"Hait??",
"Honduras",
"Hong kong",
"Hungr??a",
"India",
"Indonesia",
"Ir??n",
"Irak",
"Irlanda",
"Isla Bouvet",
"Isla de Man",
"Isla de Navidad",
"Isla Norfolk",
"Islandia",
"Islas Bermudas",
"Islas Caim??n",
"Islas Cocos (Keeling)",
"Islas Cook",
"Islas de ??land",
"Islas Feroe",
"Islas Georgias del Sur y Sandwich del Sur",
"Islas Heard y McDonald",
"Islas Maldivas",
"Islas Malvinas",
"Islas Marianas del Norte",
"Islas Marshall",
"Islas Pitcairn",
"Islas Salom??n",
"Islas Turcas y Caicos",
"Islas Ultramarinas Menores de Estados Unidos",
"Islas V??rgenes Brit??nicas",
"Islas V??rgenes de los Estados Unidos",
"Israel",
"Italia",
"Jamaica",
"Jap??n",
"Jersey",
"Jordania",
"Kazajist??n",
"Kenia",
"Kirguist??n",
"Kiribati",
"Kuwait",
"L??bano",
"Laos",
"Lesoto",
"Letonia",
"Liberia",
"Libia",
"Liechtenstein",
"Lituania",
"Luxemburgo",
"M??xico",
"M??naco",
"Macao",
"Maced??nia",
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
"Om??n",
"Pa??ses Bajos",
"Pakist??n",
"Palau",
"Palestina",
"Panam??",
"Pap??a Nueva Guinea",
"Paraguay",
"Per??",
"Polinesia Francesa",
"Polonia",
"Portugal",
"Puerto Rico",
"Qatar",
"Reino Unido",
"Rep??blica Centroafricana",
"Rep??blica Checa",
"Rep??blica Dominicana",
"Rep??blica de Sud??n del Sur",
"Reuni??n",
"Ruanda",
"Ruman??a",
"Rusia",
"Sahara Occidental",
"Samoa",
"Samoa Americana",
"San Bartolom??",
"San Crist??bal y Nieves",
"San Marino",
"San Mart??n (Francia)",
"San Pedro y Miquel??n",
"San Vicente y las Granadinas",
"Santa Elena",
"Santa Luc??a",
"Santo Tom?? y Pr??ncipe",
"Senegal",
"Serbia",
"Seychelles",
"Sierra Leona",
"Singapur",
"Sint Maarten",
"Siria",
"Somalia",
"Sri lanka",
"Sud??frica",
"Sud??n",
"Suecia",
"Suiza",
"Surin??m",
"Svalbard y Jan Mayen",
"Swazilandia",
"Tayikist??n",
"Tailandia",
"Taiw??n",
"Tanzania",
"Territorio Brit??nico del Oc??ano ??ndico",
"Territorios Australes y Ant??rticas Franceses",
"Timor Oriental",
"Togo",
"Tokelau",
"Tonga",
"Trinidad y Tobago",
"Tunez",
"Turkmenist??n",
"Turqu??a",
"Tuvalu",
"Ucrania",
"Uganda",
"Uruguay",
"Uzbekist??n",
"Vanuatu",
"Venezuela",
"Vietnam",
"Wallis y Futuna",
"Yemen",
"Yibuti",
"Zambia",
"Zimbabue"
];

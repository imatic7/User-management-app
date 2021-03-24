User Management App

Na početku sam odlučio da App ima 3 stranice(Home, Login, Dashboard). React-router-dom sam koristio za prebacivanje između stranica. Za dizajn sam odlučio koristiti background sliku, a za dizajniranje komponenti sam koristio 'styled-components'. Formik-lib sam koristio kod Login forme, te Yup za validationSchema. U onSubmiit funkciji na loginu sam koristio fetch Api POST method za autentifikaciju prijave.

U dashboardu se sve nalazi centrirano osim 'Add User button' koji je u desnom kutu paralelno s 'SearchBox' komponentom. Za fetch API user liste sam koristio useState i useEffect hooks te ovisno o vrijednosti dužine input-a(nakon 2 slova) u 'SearchBox' sam filtrirano users po imenu.

// Categorize all elements into groups
var noblegases = {
                name: 'noble_gas',
                category_name: 'Noble Gas',
                elements: [2, 10, 18, 36, 54, 86, 118]
                };
var halogens = {
                name: 'halogen',
                category_name: 'Halogen',
                elements: [9, 17, 35, 53, 85, 117]
                };
var nonmetals = {
                name: 'non-metal',
                category_name: 'Non-metal',
                elements: [1, 6, 7, 8, 15, 16, 34]
                };
var transmetals = {
                name: 'metalloid',
                category_name: 'Metalloid',
                elements: [5, 14, 32, 33, 51, 52, 84]
                };
var poormetals = {
                name: 'poor_metal',
                category_name: "Poor metal",
                elements: [13, 31, 49, 50, 81, 82, 83, 113, 114, 115, 116]
                };
var alkmetals = {
                name: 'alkali_metal',
                category_name: "Alkali metal",
                elements: [3, 11, 19, 37, 55, 87]
                };
var earthmetals = {
                name: 'earth_metal',
                category_name: "Earth metal",
                elements: [4, 12, 20, 38, 56, 88]
                };
var dblock = {
                name: 'transition_metal',
                category_name: "Transition metal",
                elements: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 72, 73, 74, 75, 76, 77, 78, 79, 80,
              104, 105, 106, 107, 108, 109, 110, 111, 112]
                };
var lanthanoids = {
                name: 'lanthanoid',
                category_name: "Lanthanoid",
                elements: [57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71]
                };
var actinoids = {
                name: 'actinoid',
                category_name: "Actinoid",
                elements: [89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103]
                };

// Array of different types of elements. This will be used to select background gradient
var types = [noblegases, halogens, nonmetals, transmetals, poormetals, alkmetals, earthmetals, dblock, lanthanoids, actinoids];

var gases = {
                name: 'gas',
                elements: [1, 2, 7, 8, 9, 10, 17, 18, 36, 54, 86, 118]
};

//var liquids = {
//                name: 'liquid',
//                elements: [35, 80]
//};

//states = [gases, liquids];

// Half life can be used for radioactivity in the future
var t12_seconds = {
                stability: "extremely unstable",
                elements:[110, 112, 114, 116, 117, 118],
                range: "<35 seconds"
};

var t12_minutes = {
                stability: "very unstable",
                elements: [87, 109, 111, 113, 115],
                range: "1 min - 25 mins"
};

var t12_hours = {
                stability: "quite unstable",
                elements: [102, 108, 106, 104, 107, 85, 103],
                range: "55 mins - 10 hrs"
};

var t12_days = {
                stability: "unstable",
                elements: [105, 86, 101, 100],
                range: "1 day - ~100 days"
};

var t12_years = {
                stability: "somewhat unstable",
                elements: [99, 61, 89, 84],
                range: "1 year - 105 years"
};

var t12_millenia = {
                stability: "slightly unstable",
                elements: [98, 97, 88, 95, 91],
                range: "~900 years - 35 000 yrs"
};

var t12_ages = {
                stability: "almost stable",
                elements: [93, 43, 96],
                range: "2M years - 16M years"
};

//create a grid of the entire periodic table. typeof() value determines whether it is an empty space, element, or line break

var order = [true, 1, '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 2, true, 3, 4,
             '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 5, 6, 7, 8, 9, 10, true, 11, 12, '-', '-', '-',
             '-', '-', '-', '-', '-', '-', '-', 13, 14, 15, 16, 17, 18, true, 19, 20, 21, 22, 23, 24, 25, 26, 27,
             28, 29, 30, 31, 32, 33, 34, 35, 36, true, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
             51, 52, 53, 54, true, 55, 56, lanthanoids,72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, true,
             87, 88, actinoids, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, true, '-',
             true, '-', '-', 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, true, '-', '-', 89, 90, 91,
             92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103]

// element names
var names = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium', 'Boron', 'Carbon', 'Nitrogen', 'Oxygen', 'Fluorine', 'Neon',
                'Sodium', 'Magnesium', 'Aluminium', 'Silicon', 'Phosphorus', 'Sulfur', 'Chlorine', 'Argon', 'Potassium',
                'Calcium', 'Scandium', 'Titanium', 'Vanadium', 'Chromium', 'Manganese', 'Iron', 'Cobalt', 'Nickel', 'Copper',
                'Zinc', 'Gallium', 'Germanium', 'Arsenic', 'Selenium', 'Bromine', 'Krypton', 'Rubidium', 'Strontium', 'Yttrium',
                'Zirconium', 'Niobium', 'Molybdenum', 'Technetium', 'Ruthenium', 'Rhodium', 'Palladium', 'Silver', 'Cadmium',
                'Indium', 'Tin', 'Antimony', 'Tellurium', 'Iodine', 'Xenon', 'Cesium', 'Barium', 'Lanthanum', 'Cerium', 'Praseodymium',
                'Neodymium', 'Promethium', 'Samarium', 'Europium', 'Gadolinium', 'Terbium', 'Dysprosium', 'Holmium', 'Erbium',
                'Thulium', 'Ytterbium', 'Lutetium', 'Hafnium', 'Tantalum', 'Tungsten', 'Rhenium', 'Osmium', 'Iridium', 'Platinum',
                'Gold', 'Mercury', 'Thallium', 'Lead', 'Bismuth', 'Polonium', 'Astatine', 'Radon', 'Francium', 'Radium', 'Actinium',
                'Thorium', 'Protactinium', 'Uranium', 'Neptunium', 'Plutonium', 'Americium', 'Curium', 'Berkelium', 'Californium',
                'Einsteinium', 'Fermium', 'Mendelevium', 'Nobelium', 'Lawrencium', 'Rutherfordium', 'Dubnium', 'Seaborgium',
                'Bohrium', 'Hassium', 'Meitnerium', 'Darmstadtium', 'Roentgenium', 'Copernicium', 'Ununtrium', 'Flerovium',
                'Ununpentium', 'Livermorium', 'Ununseptium', 'Ununoctium'];

// Element symbols
var symbols = ['H','He','Li','Be','B','C','N','O','F','Ne','Na','Mg','Al','Si','P','S','Cl','Ar','K','Ca','Sc',
                'Ti','V','Cr','Mn','Fe','Co','Ni','Cu','Zn','Ga','Ge','As','Se','Br','Kr','Rb','Sr','Y','Zr',
                'Nb','Mo','Tc','Ru','Rh','Pd','Ag','Cd','In','Sn','Sb','Te','I','Xe','Cs','Ba','La','Ce','Pr',
                'Nd','Pm','Sm','Eu','Gd','Tb','Dy','Ho','Er','Tm','Yb','Lu','Hf','Ta','W','Re','Os','Ir','Pt',
                'Au','Hg','Tl','Pb','Bi','Po','At','Rn','Fr','Ra','Ac','Th','Pa','U','Np','Pu','Am','Cm','Bk',
                'Cf','Es','Fm','Md','No','Lr','Rf','Db','Sg','Bh','Hs','Mt','Ds','Rg','Cn','Uut','Fl','Uup',
                'Lv','Uus','Uuo'];
// molecular weights
var weights = [1.008, 4.003, 6.941, 9.012, 10.81, 12.01, 14.01, '16.00', '19.00', 20.18, 22.99, 24.31, 26.98, 28.09, 30.97, 32.07,
               35.45, 39.95, '39.10', 40.08, 44.96, 47.87, 50.94, '52.00', 54.94, 55.85, 58.93, 58.69, 63.55, 65.39, 69.72, 72.64,
               74.92, 78.96, '79.90', '83.80', 85.47, 87.62, 88.91, 91.22, 92.91, 95.94, '(98)', 101.1, 102.9, 106.4, 107.9, 102.4,
               114.8, 118.7, 121.8, 127.6, 126.9, 131.3, 132.9, 137.3, 138.9, 140.1, 140.9, 144.2, '(145)', 150.4, '152.0',
               157.3, 158.9, 162.5, 164.9, 167.3, 168.9, '173.0', '175.0', 178.5, 180.9, 183.8, 186.2, 190.2, 192.2, 195.1, '197.0',
               200.6, 204.4, 207.2, '209.0', '(209)', '(210)', '(222)', '(223)', '(226)', '(227)', '232.0', '231.0', '238.0',
               '(237)', '(244)', '(243)', '(247)', '(247)', '(251)', '(252)', '(257)', '(258)', '(259)', '(262)', '(261)', '(262)',
               '(266)', '(264)', '(277)', '(268)', '(281)', '(272)', '(285)', '(284)', '(289)', '(288)', '(293)', '(294)', '(294)'];
// Electronegativities
var EN = [2.2,'-',0.98,1.57,2.04,2.55,3.04,3.44,3.98,'-',0.93,1.31,1.61,1.9,2.19,2.58,3.16,'-',0.82,1,1.36,1.54,1.63,1.66,
          1.55,1.83,1.88,1.91,1.9,1.65,1.81,2.01,2.18,2.55,2.96,3,0.82,0.95,1.22,1.33,1.6,2.16,1.9,2.2,2.28,2.2,1.93,1.69,
          1.78,1.96,2.05,2.1,2.66,2.6,0.79,0.89,1.1,1.12,1.13,1.14,'-',1.17,'-',1.2,'-',1.22,1.23,1.24,1.25,'-',1.27,1.3,
          1.5,2.36,1.9,2.2,2.2,2.28,2.54,2,1.62,2.33,2.02,2,2.2,'-',0.7,0.9,1.1,1.3,1.5,1.38,1.36,1.28,1.3,1.3,1.3,1.3,1.3,
          1.3,1.3,1.3,'-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'];
// Atomic radii
var radii = [32,46,133,102,85,75,71,63,64,67,155,139,126,116,111,103,99,96,196,171,148,136,134,122,119,116,111,110,112,118,124,
             121,121,116,114,117,210,185,163,154,147,138,128,125,125,120,128,136,142,140,140,136,133,131,232,196,180,163,176,174,
             173,172,168,169,168,167,166,165,164,170,162,152,146,137,131,129,122,123,124,133,144,144,151,145,147,142,223,201,186,
             175,169,170,171,172,166,166,168,168,165,167,173,176,161,157,149,143,141,134,129,128,121,122,136,143,162,175,165,157];
// First ionization energy
var IE1 = ['13.6','24.6','5.39','9.32','8.30','11.3','14.5','13.6','17.4','21.6','5.14','7.65','5.99','8.15','10.5','10.4','13.0','15.8','4.34','6.11','6.56','6.83','6.75','6.77','7.43','7.90','7.88','7.64','7.73','9.39','6.00','7.90','9.79','9.75','11.8','14.0','4.18','5.69','6.22','6.63','6.76','7.09','7.12','7.36','7.45','8.34','7.58','8.99','5.79','7.34','8.61','9.01','10.5','12.1','3.89','5.21','5.58','5.54','5.47','5.53','5.58','5.64','5.67','6.15','5.86','5.94','6.02','6.11','6.18','6.25','5.43','6.83','7.55','7.86','7.83','8.44','8.96','8.96','9.23','10.4','6.12','7.42','7.29','8.41','9.35','10.7','4.07','5.28','5.38','6.31','5.89','6.19','6.27','6.03','5.97','5.99','6.20','6.28','6.37','6.50','6.58','6.65','4.90','6.01','6.8','7.8','7.7','7.6','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
// Second ionization energy
var IE2 = ['DNE','54.4','75.6','18.2','25.2','24.4','29.6','35.1','35.0','50.0','47.3','15.0','18.8','16.3','19.8','23.3','23.8','27.6','31.6','11.9','12.8','13.6','14.6','16.5','15.6','16.2','17.1','18.2','20.3','18.0','20.5','15.9','18.6','21.2','21.6','24.4','27.3','11.0','12.2','13.1','14.3','16.2','15.3','16.8','18.1','19.4','21.5','16.9','18.9','14.6','16.6','18.6','19.1','21.0','23.2','10.0','11.2','10.8','10.6','10.7','10.9','11.1','11.2','12.1','11.5','11.7','11.8','11.9','12.1','12.2','13.9','14.9','16.2','16.4','16.6','17.0','17.0','18.6','20.2','18.8','20.4','15.0','16.7','19.3','17.9','21.4','22.4','10.1','11.8','12','12','12','12','12','12','12.4','12','12','12','12.4','12.4','12.5','14.3','14.7','14.0','17.1','17.5','18.2','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
// Third ionization energy
var IE3 = ['DNE','DNE','122','154','37.9','47.9','47.4','54.9','62.7','63.4','71.6','80.1','28.4','33.5','30.2','34.9','39.8','40.7','45.8','50.9','24.8','27.5','29.3','31.0','33.7','30.7','33.5','35.2','36.8','39.7','30.7','34.1','28.3','31.7','35.0','35.7','39.2','42.9','20.5','23.2','25.0','27.1','29.6','28.5','31.1','32.9','34.8','37.5','28.0','30.5','25.3','27.8','29.6','31.1','33.2','35.8','19.2','20.2','21.6','22.1','22.3','23.4','24.9','20.6','21.9','22.9','22.8','22.7','23.7','25.1','21.0','23.3','23.1','26.0','27.0','25.0','28.0','29.0','30.0','34.5','29.9','31.9','25.6','27.3','26.6','29.4','33.5','31.0','17.4','18.3','18.6','19.8','19.7','21.1','21.7','20.1','21.6','22.4','22.7','23.2','24.3','25.8','21.4','23.9','23.1','25.8','26.7','29.3','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
// Oxidation states
var ostates = ["+1, -1","none","+1","+2","+3","+4, +2, -4","+5, -3","-2","-1","none","+1","+2","+3","+4, -4","+5","+6, +4, -2","-1","none","+1","+2","+3","+4","+5","+6, +3","+7, +4, +2","+3, +2","+3, +2","+2","+2, +1","+2","+3","+4, -4","+3","+6, -2","-1","+4, +2","+1","+2","+3","+4","+5, +4","+6","+7","+3","+3","+2","+1","+2","+3","+4, +2","+3","+6, -2","-1","+6, +4, +2","+1","+2","+3","+3, +4","+3","+3","+3","+3","+2, +3","+3","+3","+3","+3","+3","+3","+3","+3","+4","+5","+6","+7","+8, +4","+4, +3","+4, +2","+3, +1","+2, +1","+3, +1","+4, +2","+3","+4, +2","-1","+2","+1","+2","+3","+4","+5","+6","+5","+4","+3","+3","+3","+3","+3","+3","+3","+2","+3","+4","+5","+6","+7","+8","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A"];

var elementsarray = [null];

var bg = [null];

// constructor for each element
function Element(atomic_number, atomic_mass, element_symbol, element_name, atomic_radius, electronegativity, category, state, category_name, first_ionization_energy, second_ionization_energy, third_ionization_energy, oxidation_state) {
    this.atomic_number = atomic_number;
    this.atomic_mass = atomic_mass;
    this.element_symbol = element_symbol;
    this.element_name = element_name;
    this.atomic_radius = atomic_radius;
    this.electronegativity = electronegativity;
    this.category = category;
    this.state = state;
    this.category_name = category_name;
    this.first_ionization_energy = first_ionization_energy;
    this.second_ionization_energy = second_ionization_energy;
    this.third_ionization_energy = third_ionization_energy;
    this.oxidation_state = oxidation_state;
}
// superscripts text
function supHTML(text) {
    if (typeof text == "string") {
        return "<sup>"+text+"</sup>";
    }
    else{
        return "<sup>"+String(text)+"</sup>";
    }
}

// Helps format the electron configuration into orbitals w/ energy levels
function showorbital(energylevel, current_orbital, electrons, maxelectrons){
    if(electrons<=0 || current_orbital[0]<energylevel || current_orbital[0] == '-'){
        return "";
    }
    else if (electrons > maxelectrons){
        return current_orbital + supHTML(String(maxelectrons));
    }
    else{
        return current_orbital + supHTML(String(electrons));
    }
}

// algorithm for calculating electron configuration using the aufbau principle
Element.prototype.getElectronConfiguration = function electron_config() {
    var anumber = this.atomic_number;
    var energyrange = [2, 10, 18, 36, 54, 86, 118];
    var sorbital, selectron, porbital, pelectron, dorbital, delectron, forbital, felectron, e_config;
    for (i=0;i<energyrange.length; i++) {
        if (anumber-energyrange[i]<=0) {
                var energylevel = i+1;
                switch (energylevel) {
                    case 1:
                             sorbital = '1s';
                             break;
                    case 2:
                             sorbital = '[He]2s';
                             break;
                    case 3:
                                sorbital = '[Ne]3s';
                                break;
                    case 4:
                                sorbital = '[Ar]4s';
                                break;
                    case 5:
                                sorbital = '[Kr]5s';
                                break;
                    case 6:
                                sorbital = '[Xe]6s';
                                break;
                    case 7:
                                sorbital = '[Rn]7s';
                                break;
                }
            if (anumber == 1 || anumber == energyrange[i-1] + 1) {
                selectron = '1';
            }
         
            else{
                selectron = '2';
            }
            
            // add p electrons
            
            porbital = String(energylevel)+'p';
            pelectron = 6-(energyrange[i]-anumber);
            minp = 2;
            maxp = 6;
            
            // add d electrons
            
            dorbital = String(energylevel-1)+'d';
            delectron = 16-(energyrange[i]-anumber);
            mind = 3;
            maxd = 10;
            
            // add f electrons
            
            forbital = String(energylevel-2)+'f';
            felectron = 30-(energyrange[i]-anumber);
            minf = 4;
            maxf = 14;
            
            //exceptions to the Aufbau Principle
            
            switch (anumber){
                case 24:
                    delectron = 5;
                    selectron = 1;
                    break;
                case 29:
                    delectron = 10;
                    selectron = 1;
                    break;
                case 41:
                    delectron = 4;
                    selectron = 1;
                    break;
                case 42:
                    delectron = 5;
                    selectron = 1;
                    break;
                case 44:
                    delectron = 7;
                    selectron = 1;
                    break;
                case 45:
                    delectron = 8;
                    selectron = 1;
                    break;
                case 46:
                    delectron = 10;
                    selectron = 0;
                    break;
                case 47:
                    delectron = 10;
                    selectron = 1;
                    break;
                case 57:
                    delectron = 1;
                    felectron = 0;
                    break;
                case 58:
                    felectron = 1;
                    delectron = 1;
                    break;
                case 64:
                    felectron = 7;
                    delectron = 1;
                    break;
                case 78:
                    delectron = 9;
                    selectron = 1;
                    break;
                case 79:
                    delectron = 10;
                    selectron = 1;
                    break;
                case 89:
                    delectron = 1;
                    felectron = 0;
                    break;
                case 90:
                    felectron = 0;
                    delectron = 2;
                    break;
                case 91:
                    felectron = 2;
                    delectron = 1;
                    break;
                case 92:
                    felectron = 3;
                    delectron = 1;
                    break;
                case 93:
                    felectron = 4;
                    delectron = 1;
                    break;
                case 96:
                    felectron = 7;
                    delectron = 1;
                    break;
                case 103:
                    delectron = 0;
                    pelectron = 1;
                    break;
                case 110:
                    delectron = 9;
                    selectron = 1;
                    break;
                case 111:
                    delectron = 10;
                    selectron = 1;
                    break;
            }
            
            e_config = showorbital(1, sorbital, selectron, 2) + showorbital(minf, forbital, felectron, maxf) + showorbital(mind, dorbital, delectron, maxd) + showorbital(minp, porbital, pelectron, maxp);
            
            break;
         }
    }
return e_config;
};

//returns bluish hexadecimal color for electronegativity

Element.prototype.getENcolor = function engradient(){
    var red;
    var blue;
    if(typeof this.electronegativity !== "number"){
        red = Math.round(255).toString(16);
        blue = "FF";
    }
    else if(this.electronegativity == 3.98){
        red = "00";
        blue = "FF";
    }
    else{
        red = Math.round(255 - (this.electronegativity / 3.98 * 255)).toString(16);
        blue = Math.round(this.electronegativity / 3.98 * 255).toString(16);
    };
    return "#" + red + "FF" + blue;
}

// Returns a specific color based on the value of the radius
Element.prototype.getRadiusColor = function radiusgradient(){
    var red = "FF", green = "FF", blue = "FF";
    if(typeof this.atomic_radius == "number"){
        red = Math.round(100 + (this.atomic_radius/232 * 150)).toString(16);
        green = Math.round(220 - (this.atomic_radius/232 * 50)).toString(16);
    }
    return "#" + red + green + blue;
}

// returns a specific color based on the first ionization energy value of the element
Element.prototype.getFirstIEColor = function firstIE(){
    var green = "FF", blue = "FF";
    if(Number(this.first_ionization_energy) == parseFloat(this.first_ionization_energy)){
        green = Math.round(255 - (Number(this.first_ionization_energy) / 24.6 * 125)).toString(16);
        blue = (130).toString(16);
    }
    return "#FF" + green + blue;
}

// Returns a specific background color for the element based on the value of the second ionization energy
Element.prototype.getSecondIEColor = function secondIE(){
    var green = "FF", blue = "FF";
    if(Number(this.second_ionization_energy) == parseFloat(this.second_ionization_energy)){
        green = Math.round(255 - (Number(this.second_ionization_energy) / 75.6 * 125)).toString(16);
        blue = (130).toString(16);
    }
    return "#FF" + green + blue;
}

// Returns a specific background color for the element based on the value of the third ionization energy
Element.prototype.getThirdIEColor = function thirdIE(){
    var green = "FF", blue = "FF";
    if(Number(this.third_ionization_energy) == parseFloat(this.third_ionization_energy)){
        green = Math.round(255-(Number(this.third_ionization_energy) / 154 * 125)).toString(16);
        blue = (130).toString(16);
    }
    return "#FF" + green + blue;
}

// converts data into objects using the constructor "Element", then adds them to the array "elementsarray"
function create_elements() {
    for (i=0; i<=names.length; i++) {
        // code for determining category
        for (j=0; j<types.length; j++) {
            if (types[j].elements.indexOf(i+1) !== -1){
                var element_category = types[j].name;
                var category = types[j].category_name;
                break;
            }
        }
        
        // determine whether the elements are solid, liquid or gas at room temperature
        if(gases.elements.indexOf(i+1) !== -1){
            var element_state = gases.name;
        }
        
        else if (i+1 == 35 || i+1 ==80){
            var element_state = "liquid";
        }
        
        else{
            var element_state = "solid";
        }
        
        // add each element as an object to elementsarray
        elementsarray.push(new Element(i+1, weights[i], symbols[i], names[i], radii[i], EN[i], element_category, element_state, category, IE1[i], IE2[i], IE3[i], ostates[i]));
    }
};

create_elements();

// DOM manipulation. Takes the data in arrays and converts them into cells
function create_cells2(){
    var table = document.getElementById('periodic');
    
    for (i=0;i<order.length; i++) {
        if (typeof order[i] == "boolean") {
            var row = document.createElement('tr');
            table.appendChild(row);
        }
        
        else if (typeof order[i] == "string") {
            var data = document.createElement('td');
                var space = document.createElement('div');
                    space.className = "empty";
                row.appendChild(data);
                data.appendChild(space);
        }
        
        else if (typeof order[i] == "object") {
            var data = document.createElement('td');
            var cell = document.createElement('div');
                cell.className = 'element ' + order[i].name;
                cell.id = order[i].name;
            var series_name = document.createElement('div');
                series_name.className = 'breakname';
                series_name.innerHTML = order[i].name+'s';
            var series_range = document.createElement('div');
                series_range.className = 'breakrange';
                series_range.innerHTML = String(order[i].elements[0]) + '-' + String(order[i].elements[order[i].elements.length-1]);
            row.appendChild(data);
            data.appendChild(cell);
            cell.appendChild(series_name);
            cell.appendChild(series_range);
        }
        
        else{
            var data = document.createElement('td');
                var cell = document.createElement('div');
                    cell.className = "element " + elementsarray[order[i]].category;
                    cell.id = elementsarray[order[i]].element_name;
                var values = document.createElement('p');
                var number = document.createElement('span');
                    number.className='anumber';
                    number.innerHTML = String(elementsarray[order[i]].atomic_number);
                var mass = document.createElement('span');
                    mass.className='amass';
                    mass.id = elementsarray[order[i]].element_name + "mass";
                    mass.innerHTML=String(elementsarray[order[i]].atomic_mass);
                var symbol = document.createElement('div');
                    symbol.className='symbol '+ elementsarray[order[i]].state;
                    symbol.innerHTML=elementsarray[order[i]].element_symbol;                
                row.appendChild(data);
                data.appendChild(cell);
                cell.appendChild(values);
                cell.appendChild(symbol);
                values.appendChild(number);
                values.appendChild(mass);
        }
    }
}
                
create_cells2();

// creates the informational banner that shows up when an element is clicked
function create_infocell() {
    var infocell = document.getElementById('infocell');
    var row1 = document.createElement('tr');
    infocell.appendChild(row1);
    //data1 holds text
    var data1 = document.createElement('td');
    data1.innerHTML = "Ionization Energy";
    data1.className = "ienergy";
    row1.appendChild(data1);

    //data2 holds element name
    var data2 = document.createElement('td');
    data2.id = 'name';
    data2.className = 'name';
    row1.appendChild(data2);

    //data3 holds electronegativity
    var data3 = document.createElement('td');
    data3.className = "right";
    data3.id = "en";
    row1.appendChild(data3);
    
    var row2 = document.createElement('tr');
    infocell.appendChild(row2);

    //data4 holds some ionization energy data
    var data4 = document.createElement('td');
    data4.id="ieunits";
    data4.className = "ienergy";
    row2.appendChild(data4);

    //data5 holds symbol
    var data5 = document.createElement('td');
    data5.id = "symbol";
    data5.innerHTML = "Uuo";
    row2.appendChild(data5);

    //data6 holds multiple properties
    var data6 = document.createElement('td');
    data6.className = "right";
    data6.id = "category";
    row2.appendChild(data6);
    
    var row3 = document.createElement('tr');
    infocell.appendChild(row3);

    //data7 holds third ionization energy
    var data7 = document.createElement('td');
    data7.id = "ie3";
    data7.className = "ienergy";
    row3.appendChild(data7);

    //data8 holds electron configuration
    var data8 = document.createElement('td');
    data8.id = "econfig";
    data8.className = "name";
    row3.appendChild(data8);

    //data9 holds atomic radius as calculated by Pyyko and Atsumi
    var data9 = document.createElement('td');
    data9.className = 'right';
    data9.id = "radius";
    row3.appendChild(data9);
}

create_infocell();

// changes the periodic table's background color according to which value is selected in the selection bar on top-right
function replaceval(){
    var optionindex = document.getElementById('dropdown').selectedIndex;
    var currentval = document.getElementsByTagName('option')[optionindex].value;
    var html;
    var bgcolor;

    for(i=1;i<=elementsarray.length;i++){
        if(bg.length < elementsarray.length){
            bg.push(document.getElementById(elementsarray[i].element_name).style.backgroundImage);
        }

        switch(currentval){
            case "atomic_mass":
                html = elementsarray[i].atomic_mass;
                document.getElementById(elementsarray[i].element_name).style.opacity = 1;
                document.getElementById(elementsarray[i].element_name).style.backgroundImage = bg[i];
                document.getElementById("legend").style.display = "none";
                document.getElementById("lanthanoid").classList.add("lanthanoid");
                document.getElementById("actinoid").classList.add("actinoid");
            break;

            case "electronegativity":
                html = elementsarray[i].electronegativity;
                bgcolor = elementsarray[i].getENcolor();
                document.getElementById(elementsarray[i].element_name).style.background = bgcolor;
                document.getElementById(elementsarray[i].element_name).style.backgroundImage = 'none';
                document.getElementById("legend").style.display = "inline-block";
                document.getElementById('image').src = "en_key.jpg";
                document.getElementById("lanthanoid").classList.remove("lanthanoid");
                document.getElementById("actinoid").classList.remove("actinoid");
            break;

            case "atomic_radius":
                html = elementsarray[i].atomic_radius;
                bgcolor = elementsarray[i].getRadiusColor();
                document.getElementById(elementsarray[i].element_name).style.background = bgcolor;
                document.getElementById(elementsarray[i].element_name).style.backgroundImage = 'none';
                document.getElementById("legend").style.display = "inline-block";
                document.getElementById('image').src = "radius_key.jpg";
                document.getElementById("lanthanoid").classList.remove("lanthanoid");
                document.getElementById("actinoid").classList.remove("actinoid");
            break;

            case "first_ionization_energy":
                html = elementsarray[i].first_ionization_energy;
                bgcolor = elementsarray[i].getFirstIEColor();
                document.getElementById(elementsarray[i].element_name).style.background = bgcolor;
                document.getElementById(elementsarray[i].element_name).style.backgroundImage = 'none';
                document.getElementById("legend").style.display = "inline-block";
                document.getElementById('image').src = "ie_key.jpg";
                document.getElementById("lanthanoid").classList.remove("lanthanoid");
                document.getElementById("actinoid").classList.remove("actinoid");
            break;

            case "second_ionization_energy":
                html = elementsarray[i].second_ionization_energy;
                bgcolor = elementsarray[i].getSecondIEColor();
                document.getElementById(elementsarray[i].element_name).style.background = bgcolor;
                document.getElementById(elementsarray[i].element_name).style.backgroundImage = 'none';
                document.getElementById("legend").style.display = "inline-block";
                document.getElementById('image').src = "ie_key.jpg";
                document.getElementById("lanthanoid").classList.remove("lanthanoid");
                document.getElementById("actinoid").classList.remove("actinoid");
            break;

            case "third_ionization_energy":
                html = elementsarray[i].third_ionization_energy;
                bgcolor = elementsarray[i].getThirdIEColor();
                document.getElementById(elementsarray[i].element_name).style.background = bgcolor;
                document.getElementById(elementsarray[i].element_name).style.backgroundImage = 'none';
                document.getElementById("legend").style.display = "inline-block";
                document.getElementById('image').src = "ie_key.jpg";
                document.getElementById("lanthanoid").classList.remove("lanthanoid");
                document.getElementById("actinoid").classList.remove("actinoid");
            break;
        }

        document.getElementById(elementsarray[i].element_name+"mass").innerHTML = html;
    }
}
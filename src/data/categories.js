import { Colors } from "../constants/colors"
import accesorios from '../assets/accesorios.jpg'
import fragancias from '../assets/fragancias.jpg'
import makeup from '../assets/makeup.jpg'
import medicamentos from '../assets/medicamentos.jpg'
import perfumeria from '../assets/perfumeria.png'
import ventalibre from '../assets/ventalibre.jpg'

export const CATEGORIES = [
    {
        id: '1',
        title: 'Medicamentos',
        color: Colors.primary,
        image: medicamentos
    },

    {
        id: '2',
        title: 'Medicamentos Venta Libre',
        color: Colors.primary,
        image: ventalibre
    },

    {
        id: '3',
        title: 'Perfumeria',
        color: Colors.primary,
        image: perfumeria
    },

    {
        id: '4',
        title: 'Fragancias',
        color: Colors.primary,
        image: fragancias
    },

    {
        id: '5',
        title: 'Make Up',
        color: Colors.primary,
        image: makeup
    },

    {
        id: '6',
        title: 'Accesorios',
        color: Colors.primary,
        image: accesorios
    },
]
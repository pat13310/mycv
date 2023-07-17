<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CvController extends AbstractController
{
    #[Route('/cv', name: 'app.cv')]
    public function index(): Response
    {
        return $this->render('cv/index.html.twig', [
            'name' => 'Création de votre CV en ligne gratuitement et rapidement',
            'points' => ['Sélectionner un CV parmi tous nos modèles libres',
                'Rédiger votre CV grâce à notre outil d\'assistance',
                'Télécharger et envoyer votre CV en ligne',
                'Modifier à volonté pour adapter au marché de l\'emploi',]
        ]);
    }

    #[Route('/year', name: 'cv.year')]
    public function step1(): Response
    {
        return $this->render('cv/step/step1.html.twig', [
            'name' => 'Depuis combien de temps travaillez-vous ?',
            'years' => ["Sans expérience", "Moins de 3 ans", "3-5 ans", "5-10 ans", "Plus de 10 ans"]
        ]);
    }

    #[Route('/camera', name: 'cv.camera')]
    public function camera(): Response
    {
        return $this->render('cv/step/camera.html.twig', [
            "name" => "Capturer votre visage ou télécharger une photo"
        ]);
    }

    #[Route('/model', name: 'cv.model')]
    public function templates(): Response
    {
        return $this->render('cv/step/step2.html.twig', [
            'name' => "choisissez un CV parmi nos suggestions",
            'subname' => 'Ajoutez votre nom et visualisez-le directement sur nos modèles.',
            'models' => ["template1", "template2", "template3", "template4", "template5", "template6", "template7", "template8"],
        ]);
    }

    #[Route('/choice', name: 'cv.choice')]
    public function choice(): Response
    {
        return $this->render('cv/step/choice.html.twig', [
            'name' => "Commencez par choisir l'option qui vous convient",
            'choices' => [

                ['icon'=>'fas fa-pen-to-square','name' => 'Créer un nouveau CV',
                    "subname" => 'Nous vous accompagnons étape par étape'],
                ['icon'=>'fas fa-arrow-up-from-bracket','name' => 'J\'ai déjà un CV',
                    'subname' => 'Votre CV sera automatiquement enrichi avec votre contenu'],]
        ]);
    }
    #[Route('/dashboard', name: 'cv.dashboard')]
    public function dashboard(): Response
    {
        return $this->render('cv/step/dashboard.html.twig', [
            'name' => "Indiquez vos renseignements personnels",
            'subname' => 'Il est recommandé d\'indiquer au moins une adresse e-mail et un numéro de téléphone.',

        ]);
    }

}

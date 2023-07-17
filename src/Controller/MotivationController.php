<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MotivationController extends AbstractController
{
    #[Route('/motivation', name: 'app.motivation')]
    public function index(): Response
    {
        return $this->render('motivation/index.html.twig', [
            'controller_name' => 'MotivationController',
        ]);
    }
}

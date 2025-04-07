import { ITask } from "../types/task";
import { Types } from "mongoose";

export const tasks: Partial<ITask>[] = [
  {
    title: "Réunion d'équipe",
    description: "Préparer la présentation pour la réunion d'équipe hebdomadaire",
    due_date: new Date("2024-03-25T10:00:00.000Z"),
    completed: false,
    user_id: new Types.ObjectId("507f1f77bcf86cd799439011")
  },
  {
    title: "Rapport mensuel",
    description: "Finaliser le rapport de performance du mois",
    due_date: new Date("2024-03-28T17:00:00.000Z"),
    completed: false,
    user_id: new Types.ObjectId("507f1f77bcf86cd799439011")
  },
  {
    title: "Révision de code",
    description: "Réviser le code de la nouvelle fonctionnalité",
    due_date: new Date("2024-03-26T15:00:00.000Z"),
    completed: true,
    user_id: new Types.ObjectId("507f1f77bcf86cd799439011")
  },
  {
    title: "Formation",
    description: "Compléter le module de formation sur la sécurité",
    due_date: new Date("2024-03-30T23:59:59.000Z"),
    completed: false,
    user_id: new Types.ObjectId("507f1f77bcf86cd799439011")
  },
  {
    title: "Backup des données",
    description: "Effectuer la sauvegarde hebdomadaire des données",
    due_date: new Date("2024-03-24T18:00:00.000Z"),
    completed: true,
    user_id: new Types.ObjectId("507f1f77bcf86cd799439011")
  },
  {
    title: "Analyse des métriques",
    description: "Analyser les métriques de performance du dernier trimestre",
    due_date: new Date("2024-03-27T16:00:00.000Z"),
    completed: false,
    user_id: new Types.ObjectId("507f1f77bcf86cd799439012")
  },
  {
    title: "Mise à jour documentation",
    description: "Mettre à jour la documentation technique",
    due_date: new Date("2024-03-29T17:00:00.000Z"),
    completed: false,
    user_id: new Types.ObjectId("507f1f77bcf86cd799439012")
  },
  {
    title: "Test d'intégration",
    description: "Exécuter les tests d'intégration pour le nouveau module",
    due_date: new Date("2024-03-25T14:00:00.000Z"),
    completed: true,
    user_id: new Types.ObjectId("507f1f77bcf86cd799439012")
  },
  {
    title: "Optimisation des requêtes",
    description: "Optimiser les requêtes de la base de données",
    due_date: new Date("2024-03-26T15:00:00.000Z"),
    completed: false,
    user_id: new Types.ObjectId("507f1f77bcf86cd799439012")
  },
  {
    title: "Déploiement",
    description: "Préparer le déploiement de la nouvelle version",
    due_date: new Date("2024-03-28T10:00:00.000Z"),
    completed: true,
    user_id: new Types.ObjectId("507f1f77bcf86cd799439012")
  },
  {
    title: "Revue de sécurité",
    description: "Effectuer l'audit de sécurité mensuel",
    due_date: new Date("2024-03-31T17:00:00.000Z"),
    completed: false,
    user_id: new Types.ObjectId("507f1f77bcf86cd799439013")
  },
  {
    title: "Mise à jour des dépendances",
    description: "Mettre à jour les dépendances du projet",
    due_date: new Date("2024-03-26T16:00:00.000Z"),
    completed: false,
    user_id: new Types.ObjectId("507f1f77bcf86cd799439013")
  },
  {
    title: "Tests de performance",
    description: "Exécuter les tests de performance",
    due_date: new Date("2024-03-27T14:00:00.000Z"),
    completed: true,
    user_id: new Types.ObjectId("507f1f77bcf86cd799439013")
  },
  {
    title: "Correction de bugs",
    description: "Corriger les bugs critiques identifiés",
    due_date: new Date("2024-03-25T17:00:00.000Z"),
    completed: true,
    user_id: new Types.ObjectId("507f1f77bcf86cd799439013")
  },
  {
    title: "Planification sprint",
    description: "Préparer la planification du prochain sprint",
    due_date: new Date("2024-03-29T10:00:00.000Z"),
    completed: false,
    user_id: new Types.ObjectId("507f1f77bcf86cd799439013")
  },
  {
    title: "Analyse des logs",
    description: "Analyser les logs d'erreur de la semaine",
    due_date: new Date("2024-03-26T11:00:00.000Z"),
    completed: false,
    user_id: new Types.ObjectId("507f1f77bcf86cd799439014")
  },
  {
    title: "Mise à jour API",
    description: "Mettre à jour la documentation de l'API",
    due_date: new Date("2024-03-28T15:00:00.000Z"),
    completed: true,
    user_id: new Types.ObjectId("507f1f77bcf86cd799439014")
  },
  {
    title: "Tests unitaires",
    description: "Écrire les tests unitaires pour le nouveau module",
    due_date: new Date("2024-03-27T16:00:00.000Z"),
    completed: false,
    user_id: new Types.ObjectId("507f1f77bcf86cd799439014")
  },
  {
    title: "Optimisation du cache",
    description: "Optimiser la stratégie de mise en cache",
    due_date: new Date("2024-03-25T13:00:00.000Z"),
    completed: true,
    user_id: new Types.ObjectId("507f1f77bcf86cd799439014")
  },
  {
    title: "Revue de code",
    description: "Effectuer la revue de code pour les pull requests",
    due_date: new Date("2024-03-30T17:00:00.000Z"),
    completed: false,
    user_id: new Types.ObjectId("507f1f77bcf86cd799439014")
  },
  {
    title: "Configuration CI/CD",
    description: "Mettre à jour la configuration CI/CD",
    due_date: new Date("2024-03-26T14:00:00.000Z"),
    completed: false,
    user_id: new Types.ObjectId("507f1f77bcf86cd799439015")
  },
  {
    title: "Tests de compatibilité",
    description: "Tester la compatibilité avec les différents navigateurs",
    due_date: new Date("2024-03-28T16:00:00.000Z"),
    completed: true,
    user_id: new Types.ObjectId("507f1f77bcf86cd799439015")
  },
  {
    title: "Optimisation des images",
    description: "Optimiser les images du site web",
    due_date: new Date("2024-03-25T15:00:00.000Z"),
    completed: false,
    user_id: new Types.ObjectId("507f1f77bcf86cd799439015")
  },
  {
    title: "Mise à jour SSL",
    description: "Renouveler les certificats SSL",
    due_date: new Date("2024-03-29T12:00:00.000Z"),
    completed: true,
    user_id: new Types.ObjectId("507f1f77bcf86cd799439015")
  },
  {
    title: "Backup de la base de données",
    description: "Effectuer la sauvegarde de la base de données",
    due_date: new Date("2024-03-27T17:00:00.000Z"),
    completed: false,
    user_id: new Types.ObjectId("507f1f77bcf86cd799439015")
  }
];

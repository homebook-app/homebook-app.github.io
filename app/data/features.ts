export interface FeatureModule {
  slug: string
  title: string
  subtitle: string
  description: string
  icon: string
  accent: string
  bullets: string[]
  isComingSoon: boolean
}

export const frontFeatures: FeatureModule[] = [
  {
    slug: 'finances',
    title: 'Finances',
    isComingSoon: true,
    icon: 'i-lucide-chart-line',
    accent: 'from-emerald-500 to-teal-500',
    subtitle: 'Personal finances at a glance',
    description: 'Track income and expenses in one clear overview. Plan savings and stay aware of upcoming costs in the weeks ahead.',
    bullets: ['Track income and expenses in one place', 'Plan savings and financial goals', 'See upcoming expenses for the next weeks', 'Understand where your money goes']
  },
  {
    slug: 'wiki',
    title: 'Wiki',
    icon: 'i-lucide-book-open-text',
    isComingSoon: true,
    accent: 'from-sky-500 to-blue-500',
    subtitle: 'A shared space for family Notes',
    description: 'Create notes, guides, and helpful information for your household in one organized place. Keep important knowledge easy to find and update for everyone in the family.',
    bullets: ['Create notes and household guides', 'Organize knowledge in simple pages', 'Quickly search and find information', 'Share useful information with the whole family']
  },
  {
    slug: 'recipe-management',
    title: 'Recipe Management',
    icon: 'i-lucide-chef-hat',
    isComingSoon: true,
    accent: 'from-amber-500 to-orange-500',
    subtitle: 'Manage recipes and cook step by step',
    description: 'Save your favorite recipes and start cooking in a guided mode with clear steps, timers, and helpful prompts. Designed to look great and make cooking easier for the whole family.',
    bullets: ['Save and organize your favorite recipes', 'Cook with a guided step-by-step mode', 'Use timers and cooking helpers during steps', 'Keep recipes ready for everyday cooking']
  },
  {
    slug: 'pantry',
    title: 'Pantry',
    icon: 'i-lucide-shelving-unit',
    isComingSoon: true,
    accent: 'from-violet-500 to-fuchsia-500',
    subtitle: 'Track and manage your household supplies',
    description: 'Keep an overview of everything you have at home, from food like milk and butter to everyday essentials. See quantities at a glance and avoid running out of important items.',
    bullets: ['Track what items you have at home', 'See quantities of food and supplies', 'Avoid buying items you already have', 'Keep your household organized']
  },
  {
    slug: 'meal-planning',
    title: 'Meal Planning',
    icon: 'i-lucide-utensils',
    isComingSoon: true,
    accent: 'from-rose-500 to-red-500',
    subtitle: 'Plan your weekly meals with ease',
    description: ' Organize your meals for the current week and plan ahead for the weeks to come. Choose recipes directly from your recipe collection and keep a clear overview of past and upcoming meal plans.',
    bullets: ['Plan meals for the current and upcoming weeks', 'Use recipes directly from your recipe collection', 'See past and future meal plans at a glance', 'Keep family meals organized']
  },
  {
    slug: 'lists-reminder',
    title: 'Lists & Reminder',
    icon: 'i-lucide-list-start',
    isComingSoon: true,
    accent: 'from-sky-500 to-amber-500',
    subtitle: 'Lists and reminders for everyday tasks',
    description: 'Create simple lists for tasks, shopping, or anything your household needs to remember. Use flexible reminders so nothing important slips through the cracks.',
    bullets: ['Create simple to-do and shopping lists', 'Add powerful reminders for important tasks', 'Organize everyday household activities', 'Never forget important things again']
  }
]

export const backFeatures: FeatureModule[] = [
  {
    slug: 'recipe-import',
    title: 'Recipe Import',
    icon: 'i-lucide-notebook-pen',
    isComingSoon: true,
    accent: 'from-cyan-500 to-sky-500',
    subtitle: 'Instantly turn videos and websites into recipes',
    description: 'Add recipes from videos, websites, and other sources in seconds. AI extracts the ingredients and steps automatically so you can save and cook them right away.',
    bullets: ['Import recipes from videos and websites', 'Automatically extract ingredients and steps', 'Save recipes with just a few clicks', 'Turn online cooking content into usable recipes']
  },
  {
    slug: 'full-api-access',
    title: 'Full API Access',
    icon: 'i-lucide-chevrons-left-right-ellipsis',
    isComingSoon: true,
    accent: 'from-indigo-500 to-blue-500',
    subtitle: 'Full access through a unified API',
    description: 'Access all HomeBook features through a simple and consistent API. Build integrations, automate workflows, or connect your own apps and tools with ease.',
    bullets: ['Access all HomeBook features through one API', 'Build integrations with external apps', 'Automate workflows and data access', 'Use a consistent and simple interface']
  },
  {
    slug: 'pat-access',
    title: 'Full Access with PATs',
    icon: 'i-lucide-shield-user',
    isComingSoon: true,
    accent: 'from-slate-500 to-zinc-500',
    subtitle: 'Secure API access with personal tokens',
    description: 'Use Personal Access Tokens (PATs) to call the API just like the user would. Perfect for automations, scripts, and integrations with your own tools.',
    bullets: ['Authenticate API calls with personal tokens', 'Use HomeBook features in scripts and automations', 'Secure access without sharing passwords', 'Integrate HomeBook with your own tools']
  },
  {
    slug: 'ai-provider',
    title: 'AI Provider',
    icon: 'i-lucide-bot',
    isComingSoon: true,
    accent: 'from-cyan-500 to-sky-500',
    subtitle: 'Flexible AI services for every feature',
    description: 'HomeBook offers a comprehensive AI provider platform. Users can specify which AI services they want to use in the settings. They can also integrate their own AI services. Complete independence.',
    bullets: ['Connect multiple AI providers in one system', 'Choose the best AI for each task', 'Use AI features across all HomeBook modules', 'Configure AI services in simple settings']
  },
  {
    slug: 'debt-management',
    title: 'Debt Management',
    icon: 'i-lucide-hand-coins',
    isComingSoon: true,
    accent: 'from-cyan-500 to-sky-500',
    subtitle: 'Track and manage your debts',
    description: 'Keep a clear overview of your debts and plan how to pay them off step by step. Track balances, payments, and progress to stay motivated on your way to becoming debt-free.',
    bullets: ['Track all debts in one overview', 'Plan repayments step by step', 'Monitor balances and payment progress', 'Stay motivated while reducing debt']
  }
]

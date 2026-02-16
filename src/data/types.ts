export type RoadmapStatus = 'planned' | 'progress' | 'done';

export interface RoadmapItem {
  id: string;
  date: string;
  status: RoadmapStatus;
  title: string;
  summary: string;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  chips: string[];
}

export interface IntroPoint {
  title: string;
  text: string;
}

export type ModuleStatus = 'live' | 'beta' | 'planned';

export interface ModuleInfo {
  id: string;
  name: string;
  status: ModuleStatus;
  summary: string;
  tags: string[];
}

export type DocEntryType = 'markdown' | 'openapi';

export interface DocEntry {
  id: string;
  type: DocEntryType;
  group: string;
  label: string;
  path: string;
}

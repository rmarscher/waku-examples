// deno-fmt-ignore-file
// biome-ignore format: generated types do not need formatting
// prettier-ignore
import type { PathsForPages, GetConfigResponse } from 'waku/router';

// prettier-ignore
import type { getConfig as File_LangAbout_getConfig } from './pages/[lang]/about';
// prettier-ignore
import type { getConfig as File_LangIndex_getConfig } from './pages/[lang]/index';
// prettier-ignore
import type { getConfig as File_LangTestId_getConfig } from './pages/[lang]/test/[id]';
// prettier-ignore
import type { getConfig as File_Index_getConfig } from './pages/index';

// prettier-ignore
type Page =
| ({ path: '/[lang]/about' } & GetConfigResponse<typeof File_LangAbout_getConfig>)
| ({ path: '/[lang]' } & GetConfigResponse<typeof File_LangIndex_getConfig>)
| ({ path: '/[lang]/test/[id]' } & GetConfigResponse<typeof File_LangTestId_getConfig>)
| ({ path: '/' } & GetConfigResponse<typeof File_Index_getConfig>);

// prettier-ignore
declare module 'waku/router' {
  interface RouteConfig {
    paths: PathsForPages<Page>;
  }
  interface CreatePagesConfig {
    pages: Page;
  }
}

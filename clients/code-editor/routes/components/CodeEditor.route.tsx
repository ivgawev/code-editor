import { Page } from '@react/ui';
import { Editor, FileExplorer, TopMenu } from '#/modules';
import { PathsProvider } from '#/providers';

const CodeEditorRoute = () => {
      return (
            <Page>
                  <TopMenu />

                  <PathsProvider>
                        <FileExplorer />
                        <Editor />
                  </PathsProvider>
            </Page>
      );
};

export default CodeEditorRoute;

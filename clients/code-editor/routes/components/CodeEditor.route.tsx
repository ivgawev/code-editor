import { Page } from '@react/ui';
import { Editor, FileExplorer, TopMenu } from '#/modules';
import { PathsContextProvider } from '#/providers';

const CodeEditorRoute = () => {
      return (
            <Page>
                  <TopMenu />

                  <PathsContextProvider>
                        <FileExplorer />
                        <Editor />
                  </PathsContextProvider>
            </Page>
      );
};

export default CodeEditorRoute;

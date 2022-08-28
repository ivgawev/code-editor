import { Page, Split } from '@react/ui';
import { Editor, FileExplorer, TopMenu } from '#/modules';
import { PathsContextProvider } from '#/providers';

const CodeEditorRoute = () => {
      return (
            <Page>
                  <TopMenu />

                  <PathsContextProvider>
                        <Split size={{ left: 1, right: 3 }}>
                              <FileExplorer />
                              <Editor />
                        </Split>
                  </PathsContextProvider>
            </Page>
      );
};

export default CodeEditorRoute;

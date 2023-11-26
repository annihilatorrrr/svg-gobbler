import { javascript } from '@codemirror/lang-javascript'
import { basicLight } from '@uiw/codemirror-theme-basic'
import CodeMirror, { EditorView } from '@uiw/react-codemirror'
import { Button } from 'src/components'
import { useClipboard } from 'src/hooks'
import { useDetails } from 'src/providers'
import { useSvgr } from './use-svgr'

export const PreviewReact = () => {
  const { state, dispatch } = useDetails()
  const { config, result } = state.preview.svgr
  const { text, copyToClipboard } = useClipboard()
  const { loading } = useSvgr()

  const handleBooleanChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target
    dispatch({ type: 'set-svgr-config-value', payload: { key: id, value: checked } })
  }

  const handleCopy = () => {
    copyToClipboard(result)
  }

  return (
    <div className="relative h-full">
      <Button size="xs" className="absolute right-4 top-4 z-10" onClick={handleCopy}>
        {text}
      </Button>
      {!loading && (
        <CodeMirror
          readOnly
          value={result}
          theme={basicLight}
          extensions={[javascript(), EditorView.lineWrapping]}
          className="cm-padding-fix h-1/2"
          basicSetup={{ highlightActiveLine: false }}
        />
      )}
      {loading && (
        <div className="flex h-1/2 items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" height={60}>
            <path
              fill="rgb(220, 38, 38)"
              d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                dur="1s"
                from="0 50 50"
                to="360 50 50"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </div>
      )}

      <div className="h-1/2 shrink-0 overflow-auto border-t p-4">
        <header className="mb-4">
          <h2 className="mt-2 text-sm font-medium">SVGR Options</h2>
        </header>

        <div className="mt-6 flex gap-2">
          <input
            type="checkbox"
            className="checkbox"
            id="dimensions"
            checked={config.dimensions}
            onChange={handleBooleanChange}
          />
          <div>
            <label htmlFor="dimensions" className="export-label">
              Dimensions
            </label>
            <span className="text-muted block pt-1">
              Keep width and height attributes from the root SVG tag.
            </span>
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          <input
            type="checkbox"
            className="checkbox"
            id="ref"
            checked={config.ref}
            onChange={handleBooleanChange}
          />
          <div>
            <label htmlFor="ref" className="export-label">
              Ref
            </label>
            <span className="text-muted block pt-1">Supply a forward ref to the root SVG tag.</span>
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          <input
            type="checkbox"
            className="checkbox"
            id="native"
            checked={config.native}
            onChange={handleBooleanChange}
          />
          <div>
            <label htmlFor="native" className="export-label">
              Native
            </label>
            <span className="text-muted block pt-1">
              Modify all SVG nodes with uppercase and use a specific template with react-native-svg
              imports. All unsupported nodes will be removed.
            </span>
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          <input
            type="checkbox"
            className="checkbox"
            id="typescript"
            checked={config.typescript}
            onChange={handleBooleanChange}
          />
          <div>
            <label htmlFor="typescript" className="export-label">
              Typescript
            </label>
            <span className="text-muted block pt-1">Generate type definitions for TypeScript</span>
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          <input
            type="checkbox"
            className="checkbox"
            id="memo"
            checked={config.memo}
            onChange={handleBooleanChange}
          />
          <div>
            <label htmlFor="memo" className="export-label">
              Memo
            </label>
            <span className="text-muted block pt-1">Wrap component definition in a React.memo</span>
          </div>
        </div>
      </div>
    </div>
  )
}
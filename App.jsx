import Provider from './Provider.jsx'
import Layout from './components/Layout.jsx'
import Button from './components/Button.jsx'
import Input from './components/Input.jsx'

export default function App() {
   return <Provider>
      <Layout direction="column" spacing={1}>
         <Input />
         <Input />
         <Button />
      </Layout>
   </Provider>
}


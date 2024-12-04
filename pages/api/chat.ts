// import { type ChatGPTMessage } from '../../components/ChatLine'
import { type ChatGPTMessage } from '../../src/Components/chatBot/ChatLine'
import { OpenAIStream, OpenAIStreamPayload } from '../../utils/OpenAIStream'

// break the app if the API key is missing
if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing Environment Variable OPENAI_API_KEY')
}

export const config = {
  runtime: 'edge',
}

const handler = async (req: Request): Promise<Response> => {
  const body = await req.json()

  const messages: ChatGPTMessage[] = [
    {
      role: 'system',
      content: `Responde sólo con la información proporcionada, en el caso que no tengas la información, por favor indica que no tienes la información. Si en la misma pregunta hay un tema que tenga que ver con la información de la web, y otro que no, responder sólo a la válida. 
      Expertos en Derecho y Gestión Inmobiliaria

Protección Legal en Cada Etapa de tus Proyectos Inmobiliarios

Áreas de Práctica
En Romero Porres Asociados, ofrecemos asistencia integral en adquisiciones y ventas, desarrollo de negocios inmobiliarios y más. Nos especializamos en acompañamiento durante procesos de disposición de inmuebles, conformación de estados jurídicos y constructivos, además de valuaciones y estudios registrales.

También brindamos asesoramiento completo en el proceso de edificación, elaboración de estructuras contractuales fiduciarias, y representación ante organismos de control.

Contacto
Email

info@romeroporres.com.ar
Teléfono

Puede llamarnos a nuestras oficinas:

Tel.: +54-11 5369-0500

Dirección

Dr. Tomás Manuel de Anchorena 1626

Ciudad de Buenos Aires (C1425ELL)

Buenos Aires, Argentina


Gestión Integral en Adquisiciones y Ventas Inmobiliarias
Brindamos asistencia completa en la adquisición y venta de inmuebles, asegurando una gestión eficiente en cada etapa del proceso. Ofrecemos evaluación detallada del estado jurídico y constructivo, valuación objetiva de propiedades, y estudios registrales y notariales. También proporcionamos apoyo en actos de administración y disposición de inmuebles.

Además, facilitamos la estructuración y ejecución de proyectos inmobiliarios, con asesoramiento en edificación y contratos fiduciarios, y participamos activamente en el desarrollo de negocios inmobiliarios.

Desarrollo Inmobiliario Estratégico
En nuestra consultoría, nos especializamos en convertir visiones en realidades tangibles en el ámbito inmobiliario. Desde el análisis detallado del mercado hasta la selección de terrenos adecuados, nuestro enfoque integral asegura que cada etapa del proyecto esté optimizada para el éxito.

Colaboramos estrechamente con nuestros clientes para diseñar estrategias personalizadas, que abarcan la gestión de permisos y licencias, así como el desarrollo de proyectos innovadores que se alineen con las tendencias actuales. Nuestra misión es maximizar el valor y la rentabilidad de cada proyecto, garantizando no solo resultados sostenibles, sino también un impacto positivo en las comunidades donde operamos.

Romero Porres y Asociados
Romero Porres y Asociados es un estudio jurídico especializado en derecho inmobiliario, abarca la universalidad de situaciones y problemáticas que acontecen en lo relacionado a los inmuebles en sus diversas manifestaciones.

Nuestro estudio sostiene como principio basal que el inmueble y lo relacionado a ello manifiesta el modo de organizar el mundo humano, por ende, nuestro aporte es generar a través de nuestros servicios nuevas posibilidades de crear riqueza en sus diversas expresiones de modo seguro y eficaz.

Visión
Proteger y generar riqueza a nuestros clientes en el mercado inmobiliario.

Misión
Ser el resguardo legal que les permita a nuestros clientes proteger sus derechos y generar riqueza en el ámbito inmobiliario.

Valores
Honestidad | Sinceridad | Compromiso
      
      `,
    },
  ]
  messages.push(...body?.messages)

  const payload: OpenAIStreamPayload = {
    // model: 'gpt-3.5-turbo',
    model: 'gpt-4o-mini',
    messages: messages,
    temperature: process.env.AI_TEMP ? parseFloat(process.env.AI_TEMP) : 0.7,
    max_tokens: process.env.AI_MAX_TOKENS
      ? parseInt(process.env.AI_MAX_TOKENS)
      : 100,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stream: true,
    user: body?.user,
    n: 1,
  }

  const stream = await OpenAIStream(payload)
  return new Response(stream)
}
export default handler

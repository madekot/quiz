import css from './TemplateName.module.scss'

interface TemplateNameProps {}

export const TemplateName = ({}: TemplateNameProps) => {
  return (
    <div className={css.templateName}>
      TemplateName Component
    </div>
  )
}

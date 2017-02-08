xquery version "3.0";
                    let $preguntes := doc('preguntes.xml')/preguntes/pregunta
                    return <preguntes>
                            {
                                (:Preguntas de tipo texto:)
                                for $pregunta in $preguntes
                                where $pregunta/tipus="text"
                                order by util:random()
                                return $pregunta
                                    
                            }
                            {
                                (:Preguntas de tipo select:)
                                for $pregunta in $preguntes
                                where $pregunta/tipus="select" 
                                order by util:random()
                                return 
                                    <pregunta>
                                        {$pregunta/@id}
                                        {$pregunta/tipus}
                                        {$pregunta/text}
                                        {$pregunta/opcio}
                                        </pregunta>
                            }
                            {
                                (:Preguntas de tipo multiple:)
                                for $pregunta in $preguntes[position()]
                                where $pregunta/tipus="multiple" order by util:random()
                                return 
                                    <pregunta>
                                        {$pregunta/@id}
                                        {$pregunta/tipus}
                                        {$pregunta/text}
                                        {$pregunta/opcio}
                                        </pregunta>
                            }
                            {
                                (:Preguntas de tipo radio:)
                                for $pregunta in $preguntes[position()]
                                where $pregunta/tipus="radio" order by util:random()
                                return 
                                    <pregunta>
                                        {$pregunta/@id}
                                        {$pregunta/tipus}
                                        {$pregunta/text}
                                        {$pregunta/opcio}
                                        </pregunta>
                            }  
                            {
                                (:Preguntas de tipo checkbox:)
                                for $pregunta in $preguntes[position()]
                                where $pregunta/tipus="checkbox" order by util:random()
                                return
                                    <pregunta>
                                        {$pregunta/@id}
                                        {$pregunta/tipus}
                                        {$pregunta/text}
                                        {$pregunta/opcio}
                                        </pregunta>
                            }
                            
                            </preguntes>

import envoy from 'mesh-envoy'
import Component from 'mesh-envoy-component'
import { MainPage, FeatureList } from 'mesh-envoy-tag'

class App extends Component
{
	constructor(props)
	{
		super(props);
	}

	render()
	{
		return (
			<MainPage>
				<FeatureList>
					<FeatureList.Feature
						id="test"
					>
						Hello World
					</FeatureList.Feature>
				</FeatureList>
			</MainPage>
		)
	}
}

envoy.render(
	<App />
)
ElasticKube Set Up
********************************

When you go to `Elastickube <https://elasticbox.com/kubernetes>`_ the setup command is in the first page:

.. raw:: html

	<div class="doc-image padding-1x">
		<img class="img-responsive" 
			 src="/../documentation/_static/images/gettingstarted/elastickube-home-page.png"
			 alt="Elastickube Home Page">
	</div>

The recommended way to deploy ElasticKube is through its url, running the command:

.. raw:: html

	<pre>
		<code>curl -s https://elastickube.com | bash</code>
	</pre>

That command will deploy ElasticKube in your Kubernetes automatically. We assume your Kubernetes is capable of deploying a loadbalancer service. If this is not the case you can still check out ElasticKube through the proxy service. For more information visit `Troubleshooting Tips </../documentation/troubleshooting/troubleshooting-tips/>`_.

When installing ElasticKube for the first time, the application will request the creation of an Admin Account.

.. raw:: html

	<div class="doc-image padding-1x">
		<div class="browser-feature">
			<div class="indicators">
				<div class="circle magenta"></div>
				<div class="circle orange"></div>
				<div class="circle green"></div>
			</div>
			<div class="browser-window">
				<img class="img-responsive img-100"
					 src="/../documentation/_static/images/gettingstarted/create-admin-account.png"
					 alt="Create Admin Account">
			</div>
		</div>
    </div>

Fill the requested information i.e.:  First Name, Last Name, Email and Password.

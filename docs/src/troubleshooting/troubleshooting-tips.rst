Troubleshooting Tips
********************************

Check out ElasticKube through the proxy service if your kubernetes installation can’t create a load balancer.

You will need to deploy this service:

.. raw:: html

	<pre>
		<code>
			  apiVersion: v1

			  kind: Service

			  metadata:

			  name: elastickube-server

			  namespace: kube-system

			  labels:

			  name: elastickube-server

			  spec:

			  ports:

			  port: 80

			  targetPort: 80

			  selector:

			  name: elastickube-server
		</code>
	</pre>

And then access it through the `Kuberentes api service <http:///api/v1/proxy/namespaces/kube-system/services/elastickube-server>`_.

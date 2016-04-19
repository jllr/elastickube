Login & Quick Tour
********************************

Login
-----------------------

* Log in with the admin account with username and password created before.

* Log in with an existing Google account after Google Authentication is enabled.

Quick Tour
-----------------------

When you log in, the top navigation bar guides you to the main areas of ElasticKube.

.. raw:: html

	<div class="doc-image padding-1x">
		<div class="browser-feature">
			<div class="indicators">
				<div class="circle magenta"></div>
				<div class="circle orange"></div>
				<div class="circle green"></div>
			</div>
			<div class="browser-window">
				<img class="img-responsive" 
					 src="/../documentation/_static/images/gettingstarted/quicktour/elastickube-navigation-bar.png"
					 alt="Elastickube navigation bar">
			</div>
		</div>
    </div>

* `Dashboard`_

* `Instances`_

* `Charts`_

* `Admin`_

* `Namespaces`_

Dashboard
~~~~~~~~~~~~~

Here you can find the instances that are deployed for a specific Namespace. What differentiates this tab from instances tab is:

* Information layout
* Provides information of the amount of containers and how many different images are deployed.

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
					 src="/../documentation/_static/images/gettingstarted/quicktour/dashboard-overview.png" 
					 alt="Elastickube dashboard overview">
			</div>
		</div>
    </div>

If we scroll down, we will find metrics of CPU usage, as the application is integrated Heapster. This tool nowadays keeps records of the last 15 minutes and the information is shown as a statistical chart:

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
					 src="/../documentation/_static/images/gettingstarted/quicktour/dashboard-charts-graph.png" 
					 alt="Elastickube dashboard graphic chart">
			</div>
		</div>
    </div>

A memory chart is also shown at the bottom of the page, in order to let the user see how the CPU is performing.

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
					 src="/../documentation/_static/images/gettingstarted/quicktour/dashboard-charts-graph-cpu.png" 
					 alt="Elastickube dashboard graphic chart CPU">
			</div>
		</div>
    </div>

Instances
~~~~~~~~~~~~~

This tab shows a list of the instances that are running at present time, as well as the details of each of them:

* Name
* State: Running/Pending
* Kind: Service/Replication Controller
* Labels: Amount of labels it has associated.
* Modified: Date when last modified

The only available function enabled nowadays is Delete.

.. raw:: html

	<div class="doc-image padding-1x">
		<div class="browser-feature">
			<div class="indicators">
				<div class="circle magenta"></div>
				<div class="circle orange"></div>
				<div class="circle green"></div>
			</div>
			<div class="browser-window">
				<img class="img-responsive" 
					 src="/../documentation/_static/images/gettingstarted/quicktour/delete-instance.png" 
					 alt="Elastickube delete instance">
			</div>
		</div>
    </div>

    <div class="doc-image padding-1x">
		<div class="browser-feature">
			<div class="indicators">
				<div class="circle magenta"></div>
				<div class="circle orange"></div>
				<div class="circle green"></div>
			</div>
			<div class="browser-window">
				<img class="img-responsive" 
					 src="/../documentation/_static/images/gettingstarted/quicktour/confirm-delete-instance.png" 
					 alt="Elastickube confirm delete instance">
			</div>
		</div>
    </div>

As you can notice, there are three different type of Instances:

* Pod: A pod is a co-located group of containers and volumes.

* Services: A service defines a set of pods and a means by which to access them, such as single stable IP address and corresponding DNS name.

* Replication Controller: A replication controller ensures that a specified number of pod replicas are running at any one time. It both allows for easy scaling of replicated systems and handles re-creation of a pod when the machine it is on reboots or otherwise fails. For i.e. if it has to manage 1 Pod and you delete it, it will automatically create a new one.  As you can see below, the status is Pending, as it just created a new one in the cluster, and it will rapidly turn into Running.

.. raw:: html

	<div class="doc-image padding-1x">
		<div class="browser-feature">
			<div class="indicators">
				<div class="circle magenta"></div>
				<div class="circle orange"></div>
				<div class="circle green"></div>
			</div>
			<div class="browser-window">
				<img class="img-responsive" 
					 src="/../documentation/_static/images/gettingstarted/quicktour/instance-pod-running.png"
					 alt="Elastickube instance pod running">
			</div>
		</div>
    </div>

* Click on Service instance name.

.. raw:: html

	<div class="doc-image padding-1x">
		<div class="browser-feature">
			<div class="indicators">
				<div class="circle magenta"></div>
				<div class="circle orange"></div>
				<div class="circle green"></div>
			</div>
			<div class="browser-window">
				<img class="img-responsive" 
					 src="/../documentation/_static/images/gettingstarted/quicktour/instance-services.png"
					 alt="Elastickube instance services">
			</div>
		</div>
    </div>

Services become linked with replication controllers using labels.

As you can see below, under Selectors area, you can find a small green icon. That one refers to the replication controller, and, on the right you will see highlighted the specification that is also labeled in the service.

.. raw:: html

	<div class="doc-image padding-1x">
		<div class="browser-feature">
			<div class="indicators">
				<div class="circle magenta"></div>
				<div class="circle orange"></div>
				<div class="circle green"></div>
			</div>
			<div class="browser-window">
				<img class="img-responsive" 
					 src="/../documentation/_static/images/gettingstarted/quicktour/instance-selectors.png"
					 alt="Elastickube instance selectors">
			</div>
		</div>
    </div>

You can easily distinguish Service Icons (Big one on the right in this case) from Replication Controller icons, as its colours are reversed.

If you click on Replication Controller icon, you will be redirected here (Replication Controller):

.. raw:: html

	<div class="doc-image padding-1x">
		<div class="browser-feature">
			<div class="indicators">
				<div class="circle magenta"></div>
				<div class="circle orange"></div>
				<div class="circle green"></div>
			</div>
			<div class="browser-window">
				<img class="img-responsive" 
					 src="/../documentation/_static/images/gettingstarted/quicktour/instance-replication-controllers.png"
					 alt="Elastickube instance replication controllers">
			</div>
		</div>
    </div>

Again, If you click on the Icon located Under Selectors menu, you will be redirected to Pods.
Here you will see that there are 3 TABS: Overview, Events and Containers.

**Overview Tab**

This screen will provide information of CPU usage and memory, as Pods are integrated with Heapster.

If we scroll down, we will find the information of the Pod deployment and creation.

.. raw:: html

	<div class="doc-image padding-1x">
		<div class="browser-feature">
			<div class="indicators">
				<div class="circle magenta"></div>
				<div class="circle orange"></div>
				<div class="circle green"></div>
			</div>
			<div class="browser-window">
				<img class="img-responsive" 
					 src="/../documentation/_static/images/gettingstarted/quicktour/instance-pod-tab-overview.png"
					 alt="Elastickube instance pod overview">
			</div>
		</div>
    </div>

**Events Tab**

We can discover the events of the pod creation.

.. raw:: html

	<div class="doc-image padding-1x">
		<div class="browser-feature">
			<div class="indicators">
				<div class="circle magenta"></div>
				<div class="circle orange"></div>
				<div class="circle green"></div>
			</div>
			<div class="browser-window">
				<img class="img-responsive" 
					 src="/../documentation/_static/images/gettingstarted/quicktour/instance-pod-tab-events.png"
					 alt="Elastickube instance pod events">
			</div>
		</div>
    </div>

**Containers Tab**

In this view we get to see the containers and also the logs

.. raw:: html

	<div class="doc-image padding-1x">
		<div class="browser-feature">
			<div class="indicators">
				<div class="circle magenta"></div>
				<div class="circle orange"></div>
				<div class="circle green"></div>
			</div>
			<div class="browser-window">
				<img class="img-responsive" 
					 src="/../documentation/_static/images/gettingstarted/quicktour/instance-pod-tab-containers.png"
					 alt="Elastickube instance pod containers">
			</div>
		</div>
    </div>

Charts
~~~~~~~~~~~~~

Here you can find all synchronized charts located in the configured repository of Admin Tab. 
These are all the templates that can be deployed, as they were previously synchronized with Github.

.. raw:: html

	<div class="doc-image padding-1x">
		<div class="browser-feature">
			<div class="indicators">
				<div class="circle magenta"></div>
				<div class="circle orange"></div>
				<div class="circle green"></div>
			</div>
			<div class="browser-window">
				<img class="img-responsive" 
					 src="/../documentation/_static/images/gettingstarted/quicktour/charts.png"
					 alt="Elastickube charts">
			</div>
		</div>
    </div>

As seen above, each chart has information of the date of creation, and the user that maintains it, and also a Github icon. According to Kubernetes copyright, the icon link can only be used to redirect to GitHub repository, as shown below:

.. raw:: html

	<div class="doc-image padding-1x">
		<div class="browser-feature">
			<div class="indicators">
				<div class="circle magenta"></div>
				<div class="circle orange"></div>
				<div class="circle green"></div>
			</div>
			<div class="browser-window">
				<img class="img-responsive" 
					 src="/../documentation/_static/images/gettingstarted/quicktour/charts-git.png"
					 alt="Example charts github repository">
			</div>
		</div>
    </div>

You can use the search engine to faster find any chart, or instead, use the dropdown located at the top-right corner and select one of the two options:

* Name
* Most recent

.. raw:: html

	<div class="doc-image padding-1x">
		<div class="browser-feature">
			<div class="indicators">
				<div class="circle magenta"></div>
				<div class="circle orange"></div>
				<div class="circle green"></div>
			</div>
			<div class="browser-window">
				<img class="img-responsive" 
					 src="/../documentation/_static/images/gettingstarted/quicktour/charts-search.png"
					 alt="Elastickube charts search engine.png">
			</div>
		</div>
    </div>

To deploy a Chart, click on the arrow that appears on the upper-right corner. This arrow will only display if you hover over the boxes with the mouse.

.. raw:: html

	<div class="doc-image padding-1x">
		<img class="img-responsive" 
			 src="/../documentation/_static/images/gettingstarted/quicktour/chart-deploy.png" 
			 alt="Elastickube chart deploy">
	</div>	

To deploy, follow these steps:

* **Choose Chart**: Simply click on the template (shown as a box). You can use the search engine to pick the box of your choice.
* **Customize deployment**: Add labels to identify the metadata of the pod container. (These can be added to almost all resources within Kubernetes).

Take into consideration that the chart will be deployed in the namespace you are working.

.. raw:: html

	<div class="doc-image padding-1x">
		<div class="browser-feature">
			<div class="indicators">
				<div class="circle magenta"></div>
				<div class="circle orange"></div>
				<div class="circle green"></div>
			</div>
			<div class="browser-window">
				<img class="img-responsive" 
					 src="/../documentation/_static/images/gettingstarted/quicktour/chart-deploy-steps.png"
					 alt="Elastickube chart deploy steps.png">
			</div>
		</div>
    </div>

Click on Deploy button. Your screen should look like this:

.. raw:: html

	<div class="doc-image padding-1x">
		<div class="browser-feature">
			<div class="indicators">
				<div class="circle magenta"></div>
				<div class="circle orange"></div>
				<div class="circle green"></div>
			</div>
			<div class="browser-window">
				<img class="img-responsive" 
					 src="/../documentation/_static/images/gettingstarted/quicktour/chart-deployed-screen.png"
					 alt="Elastickube chart deployed screen.png">
			</div>
		</div>
    </div>

Admin
~~~~~~~~~~~~~

As an Administrator you will be able to configure:

* Hostname
* Cluster Administrators
* Authentication
* Git Chart Repository: Choose in which repository you wish to clone charts.
* E-mail: send invitations to another potential users to start using the application. There is no user sign up, only access is through invitation.

This admin role is the only one that can invite team members to enable them to use the application. Invitations will be sent by e-mail. 

.. raw:: html

	<div class="doc-image padding-1x">
		<div class="browser-feature">
			<div class="indicators">
				<div class="circle magenta"></div>
				<div class="circle orange"></div>
				<div class="circle green"></div>
			</div>
			<div class="browser-window">
				<img class="img-responsive" 
					 src="/../documentation/_static/images/gettingstarted/quicktour/admin-users.png"
					 alt="Elastickube admin users role">
			</div>
		</div>
    </div>

Namespaces
~~~~~~~~~~~~~

By clicking this option, you can see all Cluster namespaces:

* **Default**: Created by Kubernetes by default.
* **Kube-system**: ElasticKube’s system location. (where it is installed)

.. raw:: html

	<div class="doc-image padding-1x">
		<div class="browser-feature">
			<div class="indicators">
				<div class="circle magenta"></div>
				<div class="circle orange"></div>
				<div class="circle green"></div>
			</div>
			<div class="browser-window">
				<img class="img-responsive" 
					 src="/../documentation/_static/images/gettingstarted/quicktour/admin-cluster-namespaces.png"
					 alt="Elastickube admin cluster namespaces">
			</div>
		</div>
    </div>

You can create as many Namespaces as needed by clicking on NEW button located on the top-right in Admin Tab.

.. raw:: html

	<div class="doc-image padding-1x">
		<div class="browser-feature">
			<div class="indicators">
				<div class="circle magenta"></div>
				<div class="circle orange"></div>
				<div class="circle green"></div>
			</div>
			<div class="browser-window">
				<img class="img-responsive" 
					 src="/../documentation/_static/images/gettingstarted/quicktour/admin-namespaces.png"
					 alt="Elastickube admin namespaces">
			</div>
		</div>
    </div>
